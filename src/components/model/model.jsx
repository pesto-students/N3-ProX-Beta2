import React from "react";
import "./model.scss";

const Model = ({
  component: Component,
  setOpenModal,
  handleSubmit,
  enableButton = true,
  buttonName = "Next",
  disableButton = false,
}) => {
  return (
    <>
      <div>
        <div className="container">
          <div className="checkout-card">
            <div className="titleCloseBtn">
              <button onClick={() => setOpenModal(false)}>X</button>
            </div>
            <form className="card-form" onSubmit={handleSubmit}>
              {Component}
              {enableButton && (
                <section className="model-buttons">
                  <button
                    className="card-button"
                    onClick={() => {
                      setOpenModal(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button className="card-button" type="submit" disabled={disableButton}>
                    {buttonName}
                  </button>
                </section>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
