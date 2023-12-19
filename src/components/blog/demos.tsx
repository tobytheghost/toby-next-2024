import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Stars } from "../Stars";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  type Points,
  type BufferGeometry,
  type NormalBufferAttributes,
  type Material,
} from "three";
import { Stars as DStars } from "@react-three/drei";

export const FramerMotionDemo1 = () => {
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

export const FramerMotionDemo2 = () => {
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

export const FramerMotionDemo3 = () => {
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

export const FramerMotionDemo4 = () => {
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

export const StarsDemo1 = () => {
  return (
    <div
      className="stars-demo"
      style={{
        position: "relative",
        width: "100%",
        height: "300px",
        marginBottom: "1rem",
      }}
    >
      <Stars orbit={true} noOrbitals={true} />
    </div>
  );
};

export const StarsDemo2 = () => {
  return (
    <div
      className="stars"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
        height: "300px",
        marginBottom: "1rem",
      }}
    >
      <Canvas>
        <DStars />
      </Canvas>
    </div>
  );
};

const RotatingStars = () => {
  const stars =
    useRef<
      Points<BufferGeometry<NormalBufferAttributes>, Material | Material[]>
    >(null);

  useFrame(() => {
    if (!stars.current) return;
    stars.current.rotation.x = stars.current.rotation.y += 0.00015;
  });

  return <DStars ref={stars} />;
};

export const StarsDemo3 = () => {
  return (
    <div
      className="stars"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
        height: "300px",
        marginBottom: "1rem",
      }}
    >
      <Canvas>
        <RotatingStars />
      </Canvas>
    </div>
  );
};
