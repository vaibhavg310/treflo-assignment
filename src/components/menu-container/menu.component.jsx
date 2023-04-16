import { useSelector } from "react-redux";
import "./menu.styles.scss";

import { selectMenuList } from "../../store/menu/menu.selector";
import PizzaCard  from "../pizza_card/pizza-card.component";

const MenuContainer = () => {

    const menuList = useSelector(selectMenuList);
    return (
           
        <div className="menu">
            <h1>Menu</h1>
            <div className="menu-list">
                {
                    menuList.map((item) => (
                        <div key={item.id} className="menu-list-item">
                            <PizzaCard  item={item}/>
                        </div>
                        
                    ))
}
            </div>
        </div>
        )
    
}

export default MenuContainer;