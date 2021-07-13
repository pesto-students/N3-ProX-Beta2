import loadScript from "./load-script";

export default async function payWithRazorPay(onSuccessCallback, amount, name) {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    return;
  }
  const options = {
    key: "rzp_test_rlwc60bTiik9i3",
    amount: Math.round(amount * 100),
    currency: "INR",
    name: name,
    description: "Test Transaction",
    async handler(response) {
      const data = {
        razorpayPaymentId: response.razorpay_payment_id,
      };
      onSuccessCallback(data);
    },

    prefill: {
      name: "test",
      email: "tedst@gmail.com",
      contact: "9481447790",
    },
    notes: {
      address: "Femgame Corporate Office",
    },
    theme: {
      color: "#3f51b5",
    },
  };

  const paymentObject = new window.Razorpay(options);

  paymentObject.open();
}
