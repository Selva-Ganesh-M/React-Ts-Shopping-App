import { createContext, ReactNode, useContext, useState } from "react";
import storeItems from "../data/items.json";

type CartContextProviderProps = {
  children: ReactNode;
};

export type DetailedCartItem = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  quantity: number;
};

type CartContext = {
  cartItems: cartItem[];
  getCartItems: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeCartItem: (id: number) => void;
  getNoOfItemsInCart: () => number;
  shouldShow: boolean;
  setShouldShow: (value: boolean) => void;
  handleHide: () => void;
  getItemsForCartOffCanvas: () => DetailedCartItem[];
};

type cartItem = {
  id: number;
  quantity: number;
};

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartContext = createContext({} as CartContext);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const getCartItems = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id: number) => {
    if (cartItems.find((item) => item.id === id) == null) {
      setCartItems((prev) => {
        return [...prev, { id: id, quantity: 1 }];
      });
    } else {
      setCartItems((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
    }
  };
  const decreaseCartQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };
  const removeCartItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const getNoOfItemsInCart = () => {
    let ans: number = 0;
    cartItems.forEach((item) => {
      if (item.quantity !== 0) {
        ans += 1;
      }
    });
    return ans;
  };
  const handleHide = (): void => {
    setShouldShow((prev) => !prev);
  };

  const getItemsForCartOffCanvas = () => {
    const reqIds: number[] = [];
    cartItems.forEach((item) => {
      if (item.quantity > 0) {
        reqIds.push(item.id);
      }
    });

    let respData: DetailedCartItem[] = [];
    storeItems.forEach((item) => {
      if (reqIds.includes(item.id)) {
        respData.push({
          ...item,
          quantity:
            cartItems.find((itr: cartItem) => item.id === itr.id)?.quantity ||
            0,
        });
      }
    });
    return respData;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        getCartItems,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeCartItem,
        getNoOfItemsInCart,
        shouldShow,
        setShouldShow,
        handleHide,
        getItemsForCartOffCanvas,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
