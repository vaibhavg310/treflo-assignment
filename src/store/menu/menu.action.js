import { MENU_ACTION_TYPES } from "./menu.type";
 import {createAction} from '../reducer.utils'

 export const fetchMenuStart = () =>
        createAction(MENU_ACTION_TYPES.FETCH_MENU_START);

export const fetchMenuSuccess = (menu) =>
    createAction(MENU_ACTION_TYPES.FETCH_MENU_SUCCESS, menu);

export const fetchMenuFailed = (error) =>
    createAction(MENU_ACTION_TYPES.FETCH_MENU_FAILED, error);


export const fetchDataAsync = () => {
    return async (dispatch) => {
        dispatch(fetchMenuStart());
        try {
            const response = await fetch('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68');
            const data = await response.json();
            dispatch(fetchMenuSuccess(data));
        } catch (error) {
            dispatch(fetchMenuFailed(error));
        }
    };
}