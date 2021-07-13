const PaymentType = ({ setPaymentType }) => {
  return (
    <>
      <h1 className="card-title">STEP 2</h1>
      <small className="card-subtitle">Select your Payment type</small>

      <div className="regular-field">
        <section className="payment-items" required>
          <input type="radio" id="radio-one" name="notaswitch-one" onChange={() => setPaymentType("COD")} />
          <label htmlFor="radio-six">Cash on delivery</label>
        </section>
        <section className="payment-items">
          <input type="radio" id="radio-two" name="notaswitch-one" onChange={() => setPaymentType("CARD")} />
          <label htmlFor="radio-seven">Card Payment</label>
        </section>
      </div>
    </>
  );
};

export default PaymentType;
