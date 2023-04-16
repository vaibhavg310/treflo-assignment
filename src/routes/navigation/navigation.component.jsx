import "./navigation.styles.scss";
import {FaPizzaSlice} from 'react-icons/fa';
import {Fragment} from 'react';
import {Outlet} from 'react-router-dom';
const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <div className="navigation-logo">
                    <h1>PIZZA-MANIA</h1>
                </div>

                <div className="navigation-cart">
                <FaPizzaSlice/>
                </div>

                
            </div>
            <Outlet/>
        </Fragment>
    );
    }

export default Navigation;