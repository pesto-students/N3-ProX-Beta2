const Total = ({ total, subTotal, discount, tax }) => {
  function formatCurrency(value) {
    return Number(value).toLocaleString("en-US", {
      style: "currency",
      currency: "INR",
    });
  }

  return (
    <div className="summary">
      <ul>
        <li>
          Subtotal <span>{formatCurrency(subTotal)}</span>
        </li>
        {discount > 0 && (
          <li>
            Discount <span>{formatCurrency(discount)}</span>
          </li>
        )}
        <li>
          Tax <span>{formatCurrency(tax)}</span>
        </li>
        <li className="total">
          Total <span>{formatCurrency(total)}</span>
        </li>
      </ul>
    </div>
  );
};

export default Total;
