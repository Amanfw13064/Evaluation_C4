import { createStore } from "redux";
import { WebUrll } from "./action";
import { reducer } from "./reducer";

export const store=createStore(reducer)

