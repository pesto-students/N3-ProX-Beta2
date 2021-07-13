import React from "react";
import "./status-bar.scss";

function StatusBar() {
  return (
    <ol className="progtrckr" data-progtrckr-steps="5">
      <li className="progtrckr-done">Order Placed</li>
      <li className="progtrckr-todo">Shipped</li>
      <li className="progtrckr-todo">In Transits</li>
      <li className="progtrckr-todo">Delivered</li>
    </ol>
  );
}

export default StatusBar;
