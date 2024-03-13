import React from "react";

import LineItem from "./LineItem";

// bryt ut <li> elementet till LineItem.jsx
// byt ut <li> innuti vår map till <LineItem />
// Skicka med items, handleCheck och handleDelete som props
// Destructa dem i LineItem
// Flytta import av ikon till LineItem

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
