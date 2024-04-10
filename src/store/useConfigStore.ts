
import { create } from "zustand";


type InitialState = {
  redirectUrl: string;
};

const initialState: InitialState = {
  redirectUrl: "",
};
interface ConfigState extends InitialState {
  saveRedirectUrl: (url: string) => void;
  releaseRedirectUrl: () => void;
}

export const useConfigStore = create<ConfigState>(set => ({
    ...initialState,
    saveRedirectUrl: (url: string) => set({ redirectUrl: url }),
    releaseRedirectUrl: () => set({ redirectUrl: "" }),
}));

