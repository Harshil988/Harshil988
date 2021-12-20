import data from "./reducer";

import { combineReducers } from "redux"

const rootrouter = combineReducers({
    data,
})

export default rootrouter;