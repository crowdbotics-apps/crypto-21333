import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2136642Reducer from '../features/SignIn2136642/redux/reducers'
import SignIn2136628Reducer from '../features/SignIn2136628/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2136642: SignIn2136642Reducer,
SignIn2136628: SignIn2136628Reducer,

});