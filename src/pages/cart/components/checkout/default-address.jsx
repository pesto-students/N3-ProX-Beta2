import { useEffect } from "react";
import { useOrderDetails } from "../../../../contexts/order-context";

const DefaultAddress = ({ defaultAddress, setDefaultAddressView }) => {
  const { addFirstName, addSecondName, addPin, addPhoneNumber, addAddress, addDefaultAddress } = useOrderDetails();
  useEffect(() => {
    addFirstName(defaultAddress.firstName);
    addSecondName(defaultAddress.secondName);
    addPhoneNumber(defaultAddress.phoneNumber);
    addPin(defaultAddress.pin);
    addAddress(defaultAddress.shippingAddress);
    addDefaultAddress(defaultAddress.isDefaultAddress);
  }, []);

  const handleClick = () => {
    setDefaultAddressView();
  };

  return (
    <>
      <h1 className="card-title">STEP 1</h1>
      <small className="card-subtitle">Deliver to this Address?</small>
      <article>
        {defaultAddress.firstName} {defaultAddress.secondName}
      </article>
      <article>{defaultAddress.shippingAddress}</article>
      <article>{defaultAddress.phoneNumber}</article>
      {defaultAddress.pin}
      <section className="add-address">
        No? <a onClick={handleClick}>Click here</a> to Change
      </section>
    </>
  );
};

export default DefaultAddress;
