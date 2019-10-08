import * as actionTypes from "../actions/types";

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let incomingItem = action.payload;

      let foundItem = state.items.find(
        item =>
          item.drink === incomingItem.drink &&
          item.option === incomingItem.option
      );
      if (foundItem) {
        foundItem.quantity++;
        return {
          ...state,
          items: [...state.items]
        };
      } else {
        return {
          ...state,
          items: state.items.concat(incomingItem)
        };
      }

    case actionTypes.REMOVE_ITEM:
      let filteredItems = state.items.filter(item => item !== action.payload);
      return {
        ...state,
        items: filteredItems
      };

    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};

export default cartReducer;
