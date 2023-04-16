import "./pizza-card.styles.scss";
import ReactStars from "react-rating-stars-component";
import { BiCheckboxSquare } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../store/cart/cart.action";
import CartItem from "../cart-item/cart-item.component";
import { useState } from "react";
import { Modal, Button } from "antd";

const PizzaCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();
  const CartItems = useSelector((state) => state.cart.cartItems);

  const initialValues = {
    topping: [],
    size: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    if (e.target.name === "topping") {
      if (e.target.checked) {
        setFormValues({
          ...formValues,
          topping: [...formValues.topping, e.target.value],
        });
      } else {
        setFormValues({
          ...formValues,
          topping: formValues.topping.filter(
            (topping) => topping !== e.target.value
          ),
        });
      }
    } else {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    dispatch(addCartItem(formValues.topping, formValues.size, item, CartItems));
    setFormValues(initialValues);
    setIsModalOpen(false);
  };

  return (
    <div className="pizza-card">
      <div className="pizza-card-image-container">
        <img src={item.img_url} alt="pizza" className="pizza-card-image" />
      </div>
      <div className="pizza-card-content">
        <div className="veg">
          <h1>{item.name}</h1>
          <span className="veg-sign ">
            {item.isVeg ? (
              <BiCheckboxSquare color="green" />
            ) : (
              <BiCheckboxSquare color="red" />
            )}{" "}
          </span>
        </div>
        <p>{item.description}</p>
        <div className="price-rating">
          <h3 className="price">₹{item.price}</h3>
          <ReactStars
            classNames={"rating"}
            count={5}
            value={item.rating}
            edit={false}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
        <button className="order-button" onClick={() => showModal()}>
          {" "}
          Order Now
        </button>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
      <form onSubmit={handleSubmit} className='form'>
          <label htmlFor="size" required>
            choose size :
          </label>

          {/* make radio for selecting size of pizza */}

          {item.size[0].items.map(({ size }) => (
            <div key={size}>
              <input
                type="radio"
                name="size"
                checked={formValues.size === size}
                value={size}
                id={size}
                onChange={handleChange}
              />
              <label>{size}</label>
            </div>
          ))}

          {/* make radio for selecting toppings of pizza having option of selecting more then one if isRadio is false*/}

          <label htmlFor="topping" required>
            choose toppings :
          </label>
          {item.toppings[0].items.map(({ name }) => (
            <div key={name}>
              <input
                type={item.toppings[0].isRadio ? "radio" : "checkbox"}
                name="topping"
                checked={formValues.topping.includes(name)}
                value={name}
                id={name}
                onChange={handleChange}
              />
              <label>{name}</label>
            </div>
          ))}
          <button type="submit">Add to cart</button>
        </form>
      </Modal>
    </div>
  );
};
export default PizzaCard;
