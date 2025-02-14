import {create} from "zustand";
import {Referral} from "@/schemas/ReferralSchemas.ts";
import ApiCommunicator from "@/communicator/ApiCommunicator.ts";
import {ReferralCreateResponse, ReferralListAllOwnedResponse} from "@/schemas/ApiResponses/ReferralResponseSchemas.ts";
import {CreateReferralForm} from "@/schemas/Forms/ReferralFormSchemas.ts";

type ReferralState = {
    hydrated: boolean,
    referrals: Referral[]
}

type ReferralAction = {
    isHydrated: () => boolean;
    hydrateReferrals: () => void;
    createReferral: (createReferralForm: CreateReferralForm) => void;
    //getReferralByCode: (referral_code: ReferralCode) => Referral | undefined;
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
    createReferral: async (createReferralForm: CreateReferralForm) => {
        const parsedResponse = await ApiCommunicator.apiFetch({
            context: {
                method: 'POST',
                body: JSON.stringify(createReferralForm),
            },
            route: `/ui/user/services/referrals`
        }).then(response => response.json()).then(data => ReferralCreateResponse.safeParseAsync(data));

        if(parsedResponse.success) {
            set({referrals: [...get().referrals, parsedResponse.data.payload]});
        }
        return parsedResponse.success;
    },
    reset: () => set(initialState),
}));
