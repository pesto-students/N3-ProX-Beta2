import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Model from "../../../../components/model/model";
import PaymentType from "../../components/checkout/payment-type";
import Address from "../../components/checkout/address";
import { useStateValue } from "../../../../contexts/cart-state-provider";
import { useAuth } from "../../../../contexts/auth-context";
import { useOrderDetails } from "../../../../contexts/order-context";
import useOrder from "../../../../api/order-hook";
import payWithRazorPay from "../../../../shared/utility/pay-with-razor-pay";
import "./checkout.scss";

function CheckOut({ setOpenModal, defaultAddress, total }) {
  const { currentUser } = useAuth();
  const [step, setStep] = useState(1);
  const [paymentType, setPaymentType] = useState();
  const { firstName, secondName, pin, phoneNumber, shippingAddress, isDefaultAddress } = useOrderDetails();
  const history = useHistory();
  const [{ cart, address }, dispatch] = useStateValue();
  const { createOrder } = useOrder();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  async function handleAddressSubmit(e) {
    e.preventDefault();
    setStep(2);
    dispatch({
      type: "ADD_ADDRESS",
      address: {
        firstName,
        secondName,
        shippingAddress,
        phoneNumber,
        pin,
        isDefaultAddress,
        id: currentUser.uid,
      },
    });
  }

  const onPayment = (data) => {
    const order = {
      uid: currentUser.uid,
      address: address,
      cart: cart,
      paymentType: paymentType,
      status: "PLACED",
      paymentStatus: "PAID",
      transactionID: data.razorpayPaymentId,
      timeStamp: new Date(),
    };
    createOrder(order);
    history.push("/success");
    dispatch({ type: "EMPTY_CART" });
  };

  async function handlePaymentSubmit(e) {
    e.preventDefault();
    const order = {
      uid: currentUser.uid,
      address: address,
      cart: cart,
      status: "PLACED",
      paymentType: paymentType,
      paymentStatus: "PENDING",
      timeStamp: new Date(),
    };
    if (paymentType === "COD") {
      createOrder(order);
      history.push("/success");
      dispatch({ type: "EMPTY_CART" });
    } else if (paymentType === "CARD") {
      await payWithRazorPay(onPayment, total, currentUser.displayName);
    }
  }

  return (
    <section>
      {step == 1 ? (
        <Model
          component={<Address defaultAddress={defaultAddress} />}
          handleSubmit={handleAddressSubmit}
          setOpenModal={setOpenModal}
        />
      ) : (
        <>
          <Model
            component={<PaymentType setPaymentType={setPaymentType} />}
            handleSubmit={handlePaymentSubmit}
            setOpenModal={setOpenModal}
            buttonName="Place Order"
            disableButton={!paymentType}
          />
        </>
      )}
    </section>
  );
}

export default CheckOut;
