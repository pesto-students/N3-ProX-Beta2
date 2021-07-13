import { useState } from "react";
import TextInputBox from "../../../../components/text-input-box/text-input-box";
import { useOrderDetails } from "../../../../contexts/order-context";
import DefaultAddress from "./default-address";

const Address = ({ defaultAddress }) => {
  const { addFirstName, addSecondName, addPin, addPhoneNumber, addAddress, addDefaultAddress } = useOrderDetails();
  const [check, setCheck] = useState(true);
  const [defaultAddressView, setDefaultAddressView] = useState(defaultAddress);
  return (
    <>
      {defaultAddressView ? (
        <DefaultAddress defaultAddress={defaultAddress} setDefaultAddressView={setDefaultAddressView} />
      ) : (
        <>
          <h1 className="card-title">STEP 1</h1>
          <small className="card-subtitle">Enter your Shipping Details</small>

          <label htmlFor="username">Name</label>
          <div className="card-input-container name">
            <TextInputBox
              placeholder="Enter your First Name"
              onChange={(event) => addFirstName(event.target.value)}
              id="nameOne"
              required={true}
            />
            <TextInputBox
              placeholder="Enter your Last Name"
              onChange={(event) => addSecondName(event.target.value)}
              id="nameTwo"
              required={true}
            />
          </div>
          <label htmlFor="address">Shipping Address</label>
          <div className="card-input-container password">
            <TextInputBox
              placeholder="Enter your full address"
              onChange={(event) => addAddress(event.target.value)}
              id="adders"
              required={true}
            />
          </div>
          <label htmlFor="password">Phone Number</label>
          <div className="card-input-container password">
            <TextInputBox
              placeholder="Enter your phone number"
              onChange={(event) => addPhoneNumber(event.target.value)}
              type="number"
              id="phone"
              required={true}
            />
          </div>
          <label htmlFor="password">PIN Number</label>
          <div className="card-input-container password">
            <TextInputBox
              placeholder="Enter your pin number"
              onChange={(event) => addPin(event.target.value)}
              type="number"
              id="pin"
              required={true}
            />
          </div>
          <span className="check-box">
            <input
              type="checkbox"
              value={check}
              onChange={() => {
                setCheck(!check);
                addDefaultAddress(check);
              }}
            />
            <small>Use this Address for my upcoming orders.</small>
          </span>
        </>
      )}
    </>
  );
};

export default Address;
