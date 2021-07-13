import React from "react";
import useOrderById from "../../api/order-by-id";
import StatusBar from "../../components/status-bar/status-bar";
import Loader from "../../components/loader/loader";
import "./order-status.scss";

function OrderStatus(props) {
  const id = props.match.params.id;

  const { loading, order } = useOrderById(id);

  if (loading) {
    return <Loader />;
  }

  const toDate = (date) => new Date(date.seconds * 1000).toDateString();

  console.log(order);
  return (
    <>
      <h1 className="title">Order ID: {id}</h1>
      <StatusBar />
      <section className="order-status-wrapper">
        <div>Order Status: {order.status}</div>
        <div>Placed on: {toDate(order.timeStamp)}</div>
        <div>Ship to: {order.address.shippingAddress}</div>
        <div>Pin: {order.address.pin}</div>
        <div>Contact Number: {order.address.phoneNumber}</div>
      </section>
    </>
  );
}

export default OrderStatus;
