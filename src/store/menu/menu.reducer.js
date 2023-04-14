import { MENU_ACTION_TYPES } from "./menu.type";

export const MENU_INITIAL_STATE = {
    menuList : [
        {
        "id": 1,
        "name": "Margherita",
        "description": "A classic delight with 100% Real mozzarella cheese",
        "isVeg": true,
        "rating": 3.5,
        "price": 239,
        "img_url": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Pizza_on_stone.jpg",
        "size": [{
            "isRadio": true,
            "title": "choose size",
            "items": [{
                    "size": "Regular"
                },
                {
                    "size": "Medium"
                },
                {
                    "size": "Large"
                }
            ]
        }],
        "toppings": [{
            "isRadio": false,
            "title": "choose topping(s)",
            "items": [{
                    "name": "Red Pepper"
                },
                {
                    "name": "Onion"
                },
                {
                    "name": "Grilled Mushroom"
                },
                {
                    "name": "Extra Cheese"
                },
                {
                    "name": "Black Olive"
                }
            ]
        }]
    }, {
        "id": 2,
        "name": "Double Cheese Margherita",
        "description": "A classic delight loaded with extra 100% real mozzarella cheese",
        "isVeg": true,
        "rating": 5,
        "price": 375,
        "img_url": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Pepperoni_pizza.jpg",
        "size": [{
            "isRadio": true,
            "title": "choose size",
            "items": [{
                    "size": "Regular"
                },
                {
                    "size": "Medium"
                },
                {
                    "size": "Large"
                }
            ]
        }],
        "toppings": [{
            "isRadio": true,
            "title": "choose topping(s)",
            "items": [{
                    "name": "Red Pepper"
                },
                {
                    "name": "Onion"
                },
                {
                    "name": "Grilled Mushroom"
                },
                {
                    "name": "Extra Cheese"
                },
                {
                    "name": "Black Olive"
                }
            ]
        }]
    }, {
        "id": 3,
        "name": "Pepper Barbecue & Onion",
        "description": "A classic favorite with pepper barbeque chicken & onion",
        "isVeg": false,
        "rating": 4.5,
        "price": 435,
        "img_url": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        "size": [{
            "isRadio": true,
            "title": "choose size",
            "items": [{
                    "size": "Regular"
                },
                {
                    "size": "Medium"
                },
                {
                    "size": "Large"
                }
            ]
        }],
        "toppings": [{
            "isRadio": false,
            "title": "choose topping(s)",
            "items": [{
                    "name": "Red Pepper"
                },
                {
                    "name": "Onion"
                },
                {
                    "name": "Grilled Mushroom"
                },
                {
                    "name": "Extra Cheese"
                },
                {
                    "name": "Black Olive"
                }
            ]
        }]
    }
    ], 
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