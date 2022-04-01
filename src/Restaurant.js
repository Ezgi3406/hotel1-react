import React from "react";
import Order from "./Order";

const Restaurant = () => {
  const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
          </li>
          <Order orderType="Pizzas" />
          <Order orderType="Carrot-cake" />
          <Order orderType="Margaritta" />
      </ul>
    </div>
  );
};

export default Restaurant;
