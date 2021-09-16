import { combineReducers } from "redux";
import cardsStatus from "./cards";
import appStatus from "./appStatus";

export const allReaducers = combineReducers({ cardsStatus, appStatus });
