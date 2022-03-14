import data from './data';

import {
  CLEAR_CART,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  GET_TOTALS,
  REMOVE_ITEM,
} from './action';

const initialStore = {
  items: data,
  total: 0,
  amount: 0,
};

export const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, items: [] };
    case INCREASE_AMOUNT:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : { ...item }
        ),
      };
    case DECREASE_AMOUNT:
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload
              ? { ...item, amount: item.amount - 1 }
              : { ...item }
          )
          .filter((item) => item.amount !== 0),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case GET_TOTALS:
      const { total, amount } = state.items.reduce(
        (cartTotal, item) => {
          const { price, amount } = item;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      return {
        ...state,
        total,
        amount,
      };
    default:
      return state;
  }
};
