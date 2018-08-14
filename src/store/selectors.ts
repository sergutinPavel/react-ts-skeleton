import { IRootState } from "./root.reducer";
import { createSelector } from "reselect";


// get state
const getGeneralState = ((state: IRootState) => state.general);

// selectors
export const selectExpandSidebar = createSelector([getGeneralState], v => v.expandSidebar);
