import {create} from "zustand";
import {Referral} from "@/schemas/ReferralSchemas.ts";
import ApiCommunicator from "@/communicator/ApiCommunicator.ts";
import {ReferralListAllOwnedResponse} from "@/schemas/ApiResponses/ReferralResponseSchemas.ts";

type ReferralState = {
    hydrated: boolean,
    referrals: Referral[],
    clickHistory: object
}

type ReferralAction = {
    isHydrated: () => boolean;
    hydrateReferrals: () => void;
    //getReferralByCode: (referral_code: ReferralCode) => Referral | undefined;
    reset: () => void;
};

const initialState: ReferralState = {
    hydrated: false,
    referrals: [],
    clickHistory: {}
}

export const useReferralStore = create<ReferralState & ReferralAction>()((set, get) => ({
    ...initialState,
    isHydrated: () => get().hydrated,
    hydrateReferrals: () => {
        (async () => {
            const parsedResponse = await ApiCommunicator.apiFetch({
                context: {
                    method: 'GET'
                },
                route: `/ui/user/services/referrals/all`
            }).catch().then(response => response.json()).then(data => ReferralListAllOwnedResponse.safeParseAsync(data));

            if(parsedResponse.success) {
                set({referrals: parsedResponse.data.payload, hydrated: true});
            }
        })();
    },
    reset: () => set(initialState),
}));
