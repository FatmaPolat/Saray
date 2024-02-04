import CartContextProvider, { CartContext } from "./cartContext"

const Providers = ({children}) => {
    return(
        <>
        
          <CartContextProvider>
            { children }
          </CartContextProvider>
        
        </>
    )
}
export default Providers