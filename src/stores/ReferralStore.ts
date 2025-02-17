import {create} from "zustand";
import {Referral, ReferralCode} from "@/schemas/ReferralSchemas.ts";
import ApiCommunicator from "@/communicator/ApiCommunicator.ts";
import {
    ReferralCreateResponse,
    ReferralDeleteResponse, ReferralGetResponse,
    ReferralListAllOwnedResponse
} from "@/schemas/ApiResponses/ReferralResponseSchemas.ts";
import {CreateReferralForm} from "@/schemas/Forms/ReferralFormSchemas.ts";
import { ReferralStoreActionResponse, ReferralStoreActionResponseSchema } from "@/schemas/ZustandSchemas";

type ReferralState = {
    hydrated: boolean,
    referrals: Referral[]
}

type ReferralAction = {
    isHydrated: () => boolean;
    hydrateReferrals: () => void;
    createReferral: (createReferralForm: CreateReferralForm) => Promise<ReferralStoreActionResponse>;
    deleteReferral: (referralCode: ReferralCode) => void;
    getReferralByCode: (referralCode: ReferralCode) => Promise<Referral | undefined>;
    reset: () => void;
};

const initialState: ReferralState = {
    hydrated: false,
    referrals: []
}

export const useReferralStore = create<ReferralState & ReferralAction>()((set, get) => ({
    ...initialState,
    isHydrated: () => get().hydrated,
    hydrateReferrals: async () => {
        const parsedResponse = await ApiCommunicator.apiFetch({
            context: {
                method: 'GET'
            },
            route: `/ui/user/services/referrals/all`
        }).then(response => response.json()).then(data => ReferralListAllOwnedResponse.safeParseAsync(data));

        if(parsedResponse.success) {
            set({referrals: parsedResponse.data.payload, hydrated: true});
        }
    },
    createReferral: async (createReferralForm: CreateReferralForm): Promise<ReferralStoreActionResponse> => {
        try {
            const parsedResponse = await ApiCommunicator.apiFetch({
                context: {
                    method: 'POST',
                    body: JSON.stringify(createReferralForm),
                },
                route: `/ui/user/services/referrals`
            }).then(response => response.json()).then(data => ReferralCreateResponse.safeParseAsync(data));
    
            if(parsedResponse.success) {
                set({referrals: [...get().referrals, parsedResponse.data.payload]});
                return ReferralStoreActionResponseSchema.parse({
                    success: true,
                    error_message: null,
                    referral: parsedResponse.data.payload            
                });
            }
        } catch(e) {
             return ReferralStoreActionResponseSchema.parse({
                success: false,
                error_message:  e instanceof Error ? e.message : "Unknown Error",
                referral: undefined           
            });
        }

        return ReferralStoreActionResponseSchema.parse({
            success: false,
            error_message: "Unknown Error",
            referral: undefined           
        });
    },
    deleteReferral: async (referralCode: ReferralCode) => {
        const parsedResponse = await ApiCommunicator.apiFetch({
            context: {
                method: 'DELETE',
            },
            route: `/ui/user/services/referrals/${referralCode.toString()}`
        }).then(response => response.json()).then(data => ReferralDeleteResponse.safeParseAsync(data));

        if(parsedResponse.success) {
            set({ referrals: get().referrals.filter(ref => ref.code !== referralCode) });
        }
        return parsedResponse.success;
    },
    getReferralByCode: async (referralCode: ReferralCode): Promise<Referral | undefined> => {
        const referral = get().referrals.find(ref => ref.code === referralCode) || undefined;

        if(referral) {
            return referral;
        }

        const parsedResponse = await ApiCommunicator.apiFetch({
            context: {
                method: 'GET',
            },
            route: `/ui/user/services/referrals/${referralCode.toString()}`
        }).then(response => response.json()).then(data => ReferralGetResponse.safeParseAsync(data));

        if(parsedResponse.success) {
            set({referrals: [...get().referrals, parsedResponse.data.payload]});
            return parsedResponse.data.payload;
        }

        return undefined;
    },
    reset: () => set(initialState),
}));
