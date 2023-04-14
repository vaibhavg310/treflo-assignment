import { MENU_ACTION_TYPES } from "./menu.type";
 import {createAction} from '../reducer.utils'

 export const fetchMenuStart = () =>
        createAction(MENU_ACTION_TYPES.FETCH_MENU_START);

export const fetchMenuSuccess = (menu) =>
    createAction(MENU_ACTION_TYPES.FETCH_MENU_SUCCESS, menu);

export const fetchMenuFailed = (error) =>
    createAction(MENU_ACTION_TYPES.FETCH_MENU_FAILED, error);
