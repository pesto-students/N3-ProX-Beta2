import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import LogIn from "./pages/log-in/login";
import PrivateRoute from "./shared/utility/private-router";
import SignUp from "./pages/sign-up/sign-up";
import Categories from "./pages/categories/categories";
import ResetPassword from "./pages/reset-password/reset-password";
import ProductList from "./pages/product-list/product-list";
import { AuthProvider } from "./contexts/auth-context";
import { WishProvider } from "./contexts/wish-list-context";
import ScrollToTop from "./shared/utility/scroll-to-top";
import ProductDetails from "./pages/product-details/product-details";
import OrderSuccess from "./pages/order-success/order-success";
import MyOrders from "./pages/my-orders/my-orders";
import OrderStatus from "./pages/order-status/order-status";
import WishList from "./pages/wish-list/wish-list";
import Cart from "./pages/cart/cart";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <AuthProvider>
          <WishProvider>
            <Route exact path="/log-in" component={LogIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/forgot-password" component={ResetPassword} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/categories" component={Categories} />
            <PrivateRoute exact path="/products" component={ProductList} />
            <PrivateRoute exact path="/product/:id" component={ProductDetails} />
            <PrivateRoute exact path="/cart" component={Cart} />
            <PrivateRoute exact path="/success" component={OrderSuccess} />
            <PrivateRoute exact path="/orders" component={MyOrders} />
            <PrivateRoute exact path="/orders/:id" component={OrderStatus} />
            <PrivateRoute exact path="/wish" component={WishList} />
          </WishProvider>
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
