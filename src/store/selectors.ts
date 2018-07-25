import { IGlobalState } from './root.reducer';
import { IGeneralState } from "./general/general.reducer";

// export const getError = (state: GlobalState): string | undefined => state.auth.error;
// export const getIdToken = (state: GlobalState): string | undefined => state.auth.idToken;
// export const getIsLoggingIn = (state: GlobalState): boolean => state.auth.isLoggingIn;

export const getGeneralState = (state: IGlobalState): IGeneralState | undefined => state.general;
