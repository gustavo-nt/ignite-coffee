import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Orders } from "./pages/Orders";
import { Checkout } from "./pages/Checkout";
import { SuccessOrder } from "./pages/SuccessOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/my-orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success-order" element={<SuccessOrder />} />
      </Route>
    </Routes>
  );
}
