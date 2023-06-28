import { State, Action } from "../../typings";
  
export const productReducer = (state: State, action: Action): State => {
    const { type, payload } = action;
  
    switch (type) {
      case "ADD_TO_CART":
        return {
          ...state,
          products: payload!.products
        };
      case "REMOVE_FROM_CART":
        // console.log('removing from cart', payload);
        return {
          ...state,
          products: payload!.products
        };
      case "UPDATE_PRICE":
        return {
          ...state,
          total: payload!.total
        };
      case "UPDATE_LANG":
        return {
          ...state,
          langEng: !state.langEng
        }
      default: 
        throw new Error(`no case for this type: ${type}`);
    }
  };
  
