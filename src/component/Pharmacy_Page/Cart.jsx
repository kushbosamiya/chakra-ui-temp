import React, { useState } from "react";

const Cart = () => {
  const [Cart, setCart] = useState([]);
  return <div>{Cart.length == 0 && <div>cart is empty</div>}</div>;
};

export default Cart;
