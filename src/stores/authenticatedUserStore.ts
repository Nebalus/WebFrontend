import {User} from "@/schemas.ts";
import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {STORAGE_PREFIX} from "@/constants.ts";
import {jwtDecode} from "jwt-decode";

type AuthenticatedUserState = {
    jwt: string | undefined,
    user: User | undefined
}

type AuthenticatedUserAction = {
    setJwt: (jwt: string) => void;
    isJwtValid: (jwt: string) => boolean;
    isAuthenticated: () => boolean;
    isUserAnAdmin: () => boolean;
    setUser: (user: User) => void;
    reset: () => void;
};

const initialState: AuthenticatedUserState = {
    jwt: undefined,
    user: undefined,
}

export const useAuthenticatedUserStore = create<AuthenticatedUserState & AuthenticatedUserAction>()(
    persist(
        (set, get) => ({
            ...initialState,
            setJwt: (jwt: string) => set({ jwt }),
            isJwtValid: (jwt: string) => {
                try {
                    const parsedJwt = jwtDecode(jwt);
                    return 'exp' in parsedJwt && parsedJwt.exp ? parsedJwt.exp > Math.floor(Date.now() / 1000) : false;
                } catch (e) {
                    return false;
                }
            },
            isAuthenticated: () => {
                const { jwt, isJwtValid } = get();
                return (jwt && isJwtValid(jwt)) === true;
            },
            isUserAnAdmin: () => {
                const { user } = get();
                return user?.is_admin === true;
            },
            setUser: (user: User) => {
                set({ user });
            },
            reset: () => set(initialState),
        }),
        {
            name: STORAGE_PREFIX + 'USERSTORE',
            storage: createJSONStorage(() => localStorage)
        }
    ),
);
