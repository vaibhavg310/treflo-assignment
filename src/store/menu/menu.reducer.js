import { MENU_ACTION_TYPES } from "./menu.type";

export const MENU_INITIAL_STATE = {
    menuList : [], 
    isLoading : false,
    error: null
}

export const menuReducer = (state = MENU_INITIAL_STATE, action={}) => {

     const {type, payload} = action;

     switch(type){
            case MENU_ACTION_TYPES.FETCH_MENU_START:
                return {
                    ...state,
                    isLoading: true
                };
            case MENU_ACTION_TYPES.FETCH_MENU_SUCCESS:
                return {
                    ...state,
                    menuList: payload,
                    isLoading: false
                }; 

            case MENU_ACTION_TYPES.FETCH_MENU_FAILED:
                return {
                    ...state,
                    error: payload,
                    isLoading: false
                };
            default:
                return state;
     }
}