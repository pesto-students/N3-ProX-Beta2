import React from "react";
import useOrderByUser from "../../api/order-by-user-hook";
import OrderItems from "./components/order-items";
import { useAuth } from "../../contexts/auth-context";
import Loader from "../../components/loader/loader";
import "./my-orders.scss";

function MyOrders() {
  const { currentUser } = useAuth();
  const { loading, order } = useOrderByUser(currentUser.uid);

  if (loading) {
    return <Loader />;
  }

  if (!order || order.length === 0) {
    return <h1 className="title-no-order">You do not have any Orders yet.</h1>;
  }

  return (
    <section className="my-order">
      <h1 className="title">Your Orders</h1>
      {order?.map((item, index) => {
        return <OrderItems key={index} order={item} />;
      })}
    </section>
  );
}

export default MyOrders;
