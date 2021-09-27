import { combineReducers } from "redux";
import cardsStatus from "./cards";
import appStatus from "./appStatus";
import playerStatus from "./playersStatus";

export const allReaducers = combineReducers({ cardsStatus, appStatus, playerStatus });
