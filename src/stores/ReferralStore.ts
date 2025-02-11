import {create} from "zustand";
import {Referral, ReferralCode} from "@/schemas/ReferralSchemas.ts";
import ApiCommunicator from "@/communicator/ApiCommunicator.ts";
import {handleAuthError} from "@/utils/authUtils.ts";
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
            const response = await ApiCommunicator.apiFetch({
                context: {
                    method: 'GET'
                },
                route: `/ui/user/services/referrals/all`
            }).catch();

            handleAuthError(response);

            const responseAsJson = await response.json();
            const parsedResponse = await ReferralListAllOwnedResponse.safeParseAsync(responseAsJson);

            if(parsedResponse.success) {
                set({referrals: parsedResponse.data.payload, hydrated: true});
            }
        })();
    },
    reset: () => set(initialState),
}));
