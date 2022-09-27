import { Router } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";
import { OrderContextProvider } from "./contexts/OrderContext";

export function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <OrderContextProvider>
          <Router />
        </OrderContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  )
}