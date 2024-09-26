import {User} from "@/schemas.ts";
import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

type InternalAuthenticatedUserSchema = {
    user: User | undefined
}

type Actions = {
    setUser: (user: User) => void,
    reset: () => void,
}

export type AuthenticatedUserStore = InternalAuthenticatedUserSchema & Actions;

const initialState: InternalAuthenticatedUserSchema = {
    user: undefined,
}

export const useAuthenticatedUserStore = create<AuthenticatedUserStore>()(
    persist(
        (set) => ({
            ...initialState,
            setUser: (user: User) => console.log(user),
            reset: () => set(initialState)
        }),
        {
            name: 'USERSTORE',
            storage: createJSONStorage(() => localStorage)
        }
    ),
);