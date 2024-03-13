import React from "react";

import { FaTrashAlt } from "react-icons/fa";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li className="item" key={item.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
          />
          <label
            onDoubleClick={() => handleCheck(item.id)}
            style={item.checked ? { textDecoration: "line-through" } : null}
          >
            {item.item}
          </label>
          <FaTrashAlt
            onClick={() => handleDelete(item.id)}
            role="button"
            tabIndex="0"
            aria-label="delete item"
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
