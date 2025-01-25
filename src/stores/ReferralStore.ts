import {create} from "zustand";
import {Referral} from "@/schemas/ReferralSchemas.ts";

type ReferralState = {
    loaded: boolean,
    referrals: Referral[],
    clickHistory: object
}

type ReferralAction = {
    isLoaded: () => boolean;
    reset: () => void;
};

const initialState: ReferralState = {
    loaded: false,
    referrals: [],
    clickHistory: {}
}

export const useReferralStore = create<ReferralState & ReferralAction>()((set, get) => ({
    ...initialState,
    isLoaded: () => get().loaded,
    reset: () => set(initialState),
}));
