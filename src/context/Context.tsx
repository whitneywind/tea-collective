import { createContext, useContext, useReducer, ReactNode } from 'react';
import { productReducer } from './productReducer';
import { Product, State } from '../../typings';


interface ContextProps extends State {
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
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
    const updatedProducts = [...state.products];
  
    const existingProductIndex = updatedProducts.findIndex((p) => p.idName === product.idName);
  
    if (existingProductIndex !== -1) {
      // case: product already in cart
      updatedProducts[existingProductIndex] = {
        ...updatedProducts[existingProductIndex],
        quantity: updatedProducts[existingProductIndex].quantity + 1,
        totalItemPrice: updatedProducts[existingProductIndex].totalItemPrice + product.price,
      };
    } else {
      // case: product not yet in cart
      const newProduct = {
        ...product,
        quantity: 1,
        totalItemPrice: product.price,
      };
      updatedProducts.push(newProduct);
    }
    // console.log('add. quantity: ', updatedProducts[existingProductIndex]?.quantity)
  
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...state,
        products: updatedProducts,
      },
    });
    updateTotal(state.total + product.price);
  };

  const removeFromCart = (product: Product) => {
    const removalIndex = state.products.findIndex(p => p.idName === product.idName);

    let updatedProducts = [...state.products];
    console.log(product.quantity);

  if (product.quantity > 1) {
      updatedProducts[removalIndex] = {
        ...updatedProducts[removalIndex],
        quantity: updatedProducts[removalIndex].quantity - 1,
        totalItemPrice: updatedProducts[removalIndex].totalItemPrice - product.price,
      }
    } else if (product.quantity === 1) {
      updatedProducts = updatedProducts.filter((item) => item.idName !== product.idName);
  } 

    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
          ...state,
        products: updatedProducts,
      },
    });

    updateTotal(state.total - product.price);
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

  const contextValue: ContextProps = {
    ...state,
    addToCart,
    removeFromCart,
    updateTotal,
    updateLang,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;




export const useProducts = (): ContextProps => {
    return useContext(ProductContext);
  };