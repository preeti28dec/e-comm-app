import React ,{useState} from 'react';

export const CartContext = React.createContext({});

function CartProvider(props) {
    const [cart,setCart] = useState([]);
    const [toggle,setToggle] = useState(false)
    const [search,setSearch] = useState('')
  return (
    <CartContext.Provider value={{cart,setCart,toggle,setToggle,setSearch,search}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;