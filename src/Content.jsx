import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Ett kilo äpplen",
    },
    {
      id: 2,
      checked: false,
      item: "kakor",
    },
    {
      id: 3,
      checked: false,
      item: "Kalles Kaviar",
    },
  ]);

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" />
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" aria-label="delete item" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
