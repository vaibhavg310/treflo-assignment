import "./home.styles.scss"
import MenuContainer from "../menu-container/menu.component";
import Banner from "../banner/banner.component";
import Cart from "../cart/cart.component";

import { addCartItem } from "../../store/cart/cart.action";

const Home = () => {
 

    return (
        <div className="home">
            <div className="home-banner">
                <Banner/>
            </div>
            <div className="home-container">
                <div className="menu-container">
                    <MenuContainer/>
                </div>
                <div className="cart-container">
                    <h1><Cart/></h1>
                </div>
            
            </div>
        </div>

    );
}

export default Home;