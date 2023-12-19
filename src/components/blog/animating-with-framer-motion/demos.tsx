import { motion } from "framer-motion";
import { useState } from "react";

export const Demo1 = () => {
  const [items, setItems] = useState(["Item", "Item", "Item"]);
  const handleOnClick = () => {
    setItems((items) => [...items, "Item"]);
  };
  return (
    <div className="list">
      <button onClick={handleOnClick}>Add New Item</button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export const Demo2 = () => {
  const [items, setItems] = useState(["Item", "Item", "Item"]);
  const handleOnClick = () => {
    setItems((items) => [...items, "Item"]);
  };
  return (
    <div className="list">
      <button onClick={handleOnClick}>Add New Item</button>
      <ul>
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial="hide"
            animate="show"
            variants={{
              hide: { opacity: 0, x: 100 },
              show: { opacity: 1, x: 0 },
            }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export const Demo3 = () => {
  const [items, setItems] = useState<string[]>([]);
  const loadItems = () => {
    setItems(["Item", "Item", "Item"]);
  };
  const clearItems = () => {
    setItems([]);
  };
  return (
    <div className="list">
      {items.length ? (
        <button onClick={clearItems}>Clear Items</button>
      ) : (
        <button onClick={loadItems}>Load Items</button>
      )}
      {items.length !== 0 && (
        <ul>
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial="hide"
              animate="show"
              variants={{
                hide: { opacity: 0, x: 100 },
                show: { opacity: 1, x: 0 },
              }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const Demo4 = () => {
  const [items, setItems] = useState<string[]>([]);
  const loadItems = () => {
    setItems(["Item", "Item", "Item"]);
  };
  const clearItems = () => {
    setItems([]);
  };
  return (
    <div className="list">
      {items.length ? (
        <button onClick={clearItems}>Clear Items</button>
      ) : (
        <button onClick={loadItems}>Load Items</button>
      )}
      {items.length !== 0 && (
        <ul>
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial="hide"
              animate="show"
              variants={{
                hide: { opacity: 0, x: 100 },
                show: (i) => ({
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: i * 0.1,
                  },
                }),
              }}
              custom={i}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
};
