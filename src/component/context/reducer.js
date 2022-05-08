export const initialState = {
  basket: [],
};

// Selector
export function getBasketTotal(basket) {
  const basketTotal = basket?.reduce(
    (initialAmount, item) => initialAmount + item.price
  );
  
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

    case "INCREMENT_ITEM":
    //   we need to find out which item is clicked

    default:
      return state;
  }
};

export default reducer;
