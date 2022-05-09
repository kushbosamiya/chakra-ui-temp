export const initialState = {
  basket: [],
};

// Selector
export function getBasketTotal(basket) {
  basket.reduce((amount, item) => item.price + amount, 0);
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.title === action.title
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (title: ${action.title}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "CHANGE_CART_QTY":
      return {
        ...state,
        basket: state.basket.filter((c) =>
          c.slug === action.payload.id
            ? (c.quantity = action.payload.quantity)
            : c.quantity
        ),
      };

    case "INCREMENT":
      const updatedCart = state.basket.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity + 1 };
        }
        return curElem;
      });

    case "DECREMENT":
      const UpdatedCart = state.basket
        .map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, quantity: curElem.quantity - 1 };
          }
          return curElem;
        })
        .filter((curElem) => curElem.quantity !== 0);
      return { ...state, item: UpdatedCart };

    default:
      return state;
  }
};

export default reducer;
