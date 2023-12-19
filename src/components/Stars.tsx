"use client";

import React, { useRef, useEffect, Suspense, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars as DStars } from "@react-three/drei";
import {
  type BufferGeometry,
  type Material,
  type Mesh,
  type NormalBufferAttributes,
  type Object3DEventMap,
  type Group,
  type Points,
  TextureLoader,
} from "three";

type SphereProps = {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  texture?: string;
};

type StarsProps = {
  orbit?: boolean;
  noOrbitals?: boolean;
};

type MeshRef = Mesh<
  BufferGeometry<NormalBufferAttributes>,
  Material | Material[],
  Object3DEventMap
>;

type GroupRef = Group<Object3DEventMap>;

type StarsRef = Points<
  BufferGeometry<NormalBufferAttributes>,
  Material | Material[]
>;

const Sphere = ({ position, size, color, texture }: SphereProps) => {
  const colors = texture ? useLoader(TextureLoader, texture) : undefined;
  const sphere = useRef<MeshRef>(null);

  useFrame(() => {
    if (!sphere.current) return;
    sphere.current.rotation.x = sphere.current.rotation.y += 0.00015;
  });

  return (
    <Suspense fallback={null}>
      <mesh ref={sphere} position={position}>
        <sphereGeometry attach="geometry" args={size} />
        <meshStandardMaterial attach="material" color={color} map={colors} />
      </mesh>
    </Suspense>
  );
};

const Orbital = () => {
  const orbital = useRef<GroupRef>(null);

  useEffect(() => {
    if (!orbital.current) return;
    orbital.current.rotation.x = 0.4;
  }, []);

  useFrame(() => {
    if (!orbital.current) return;
    orbital.current.rotation.y += 0.01;
  });

  return (
    <group ref={orbital} position={[-6, -2, -2]}>
      <Suspense fallback={null}>
        <Sphere
          position={[1, 0, 1]}
          size={[0.2, 8, 8]}
          color="#fafafa"
          texture="/assets/img/clouds.png"
        />
        <Sphere
          position={[0, 0, 0]}
          size={[0.6, 8, 8]}
          color="#5fb7ff"
          texture="/assets/img/colours.png"
        />
      </Suspense>
    </group>
  );
};

const RotatingStars = () => {
  const stars = useRef<StarsRef>(null);

  useFrame(() => {
    if (!stars.current) return;
    stars.current.rotation.x = stars.current.rotation.y += 0.00015;
  });

  return <DStars ref={stars} />;
};

export const Stars = ({ orbit, noOrbitals }: StarsProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="three-canvas relative">
      <span
        className={`transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Canvas>
          <directionalLight intensity={1} castShadow position={[0, 0, 1]} />
          <RotatingStars />
          {!noOrbitals && (
            <>
              <Orbital />
              <Sphere
                color="#ff9800"
                size={[0.5, 8, 8]}
                position={[6, 2, -2]}
              />
            </>
          )}
          {orbit && <OrbitControls />}
        </Canvas>
      </span>
    </div>
  );
};
