import {User} from "@/schemas.ts";
import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {STORAGE_PREFIX} from "@/constants.ts";

type AuthenticatedUserState = {
    user: User | undefined
}

type AuthenticatedUserAction = {
    setUser: (user: User) => void,
    reset: () => void,
}

const initialState: AuthenticatedUserState = {
    user: undefined,
}

export const useAuthenticatedUserStore = create<AuthenticatedUserState & AuthenticatedUserAction>()(
    persist(
        (set) => ({
            ...initialState,
            setUser: (user: User) => console.log(user),
            reset: () => set(initialState)
        }),
        {
            name: STORAGE_PREFIX + 'USERSTORE',
            storage: createJSONStorage(() => localStorage)
        }
    ),
);