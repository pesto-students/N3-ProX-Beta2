import React, { useContext, useState } from "react";

const OrderContext = React.createContext();

export function useOrderDetails() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }) {
  const [firstName, setFirstName] = useState();
  const [secondName, setSecondName] = useState();
  const [pin, setPin] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [shippingAddress, setShippingAddress] = useState();
  const [isDefaultAddress, setIsDefaultAddress] = useState();

  function addFirstName(name) {
    return setFirstName(name);
  }

  function addSecondName(name) {
    return setSecondName(name);
  }

  function addPin(pin) {
    return setPin(pin);
  }

  function addPhoneNumber(number) {
    return setPhoneNumber(number);
  }

  function addAddress(address) {
    return setShippingAddress(address);
  }

  function addDefaultAddress(isDefault) {
    return setIsDefaultAddress(isDefault);
  }
  const value = {
    addFirstName,
    addSecondName,
    addPin,
    addPhoneNumber,
    addAddress,
    addDefaultAddress,
    firstName,
    secondName,
    pin,
    phoneNumber,
    shippingAddress,
    isDefaultAddress,
  };

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}
