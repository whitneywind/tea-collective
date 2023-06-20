import { createContext, useContext, useReducer, ReactNode } from 'react';
import { productReducer } from './productReducer';
import { Product } from '../../typings';

interface State {
  products: Product[];
  total: number;
  langEng: boolean;
}

interface ContextProps extends State {
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateTotal: (newPrice: number) => void;
    updateLang: () => void;
}

const initialState: State = {
  products: [],
  total: 0,
  langEng: true,
};

export const ProductContext = createContext<ContextProps>({
    products: initialState.products,
    total: initialState.total,
    langEng: initialState.langEng,
    addToCart: () => {},
    removeFromCart: () => {},
    updateTotal: () => {},
    updateLang: () => {},
  });

const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const addToCart = (product: Product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...state,
        products: [...state.products, product],
      },
    });
    updateTotal(Math.floor(state.total + product.price));
  };

  const removeFromCart = (productId: string) => {
    const productToRemove = state.products.find((product) => product.idName === productId);

    if (productToRemove) {
        const updatedTotal = Math.floor(state.total - productToRemove.price);
        updateTotal(updatedTotal);
    }

    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
          ...state,
        products: state.products.filter((product) => product.idName !== productId),
      },
    });
  };

  const updateTotal = (newPrice: number) => {
    dispatch({
      type: 'UPDATE_PRICE',
      payload: {
          ...state,
        total: newPrice,
      },
    });
  };

  const updateLang = () => {
    dispatch({
      type: "UPDATE_LANG",
    })
  }

  return (
    <ProductContext.Provider value={{
        ...state,
        addToCart,
        removeFromCart,
        updateTotal,
        updateLang,
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;




export const useProducts = (): ContextProps => {
    return useContext(ProductContext);
  };