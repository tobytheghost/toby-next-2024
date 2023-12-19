"use client";

import React, { useRef, useEffect, Suspense, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
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
};

const ColourSphere = ({ position, size, color }: SphereProps) => {
  const colors = useLoader(TextureLoader, "/assets/img/colours.png");
  const sphere =
    useRef<
      Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    >(null);

  useFrame(() => {
    if (!sphere.current) return;
    sphere.current.rotation.x = sphere.current.rotation.y += 0.00015;
  });

  return (
    <Suspense fallback={<div></div>}>
      <mesh ref={sphere} position={position}>
        <sphereGeometry attach="geometry" args={size} />
        <meshStandardMaterial attach="material" color={color} map={colors} />
      </mesh>
    </Suspense>
  );
};

const CloudSphere = ({ position, size, color }: SphereProps) => {
  const colors = useLoader(TextureLoader, "/assets/img/clouds.png");
  const sphere =
    useRef<
      Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    >(null);

  useFrame(() => {
    if (!sphere.current) return;
    sphere.current.rotation.x = sphere.current.rotation.y += 0.00015;
  });

  return (
    <Suspense fallback={<div></div>}>
      <mesh ref={sphere} position={position}>
        <sphereGeometry attach="geometry" args={size} />
        <meshStandardMaterial attach="material" color={color} map={colors} />
      </mesh>
    </Suspense>
  );
};

const Orbital = () => {
  const orbital = useRef<Group<Object3DEventMap>>(null);

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
        <CloudSphere position={[1, 0, 1]} size={[0.2, 8, 8]} color="#fafafa" />
        <ColourSphere position={[0, 0, 0]} size={[0.6, 8, 8]} color="#5fb7ff" />
      </Suspense>
    </group>
  );
};

const Orbital2 = () => {
  const orbital = useRef<Group<Object3DEventMap>>(null);

  useEffect(() => {
    if (!orbital.current) return;
    orbital.current.rotation.x = 0.4;
  }, []);

  useFrame(() => {
    if (!orbital.current) return;
    orbital.current.rotation.y += 0.01;
  });

  return (
    <group ref={orbital} position={[6, 2, -2]}>
      <Suspense fallback={null}>
        <mesh>
          <sphereGeometry attach="geometry" args={[0.5, 8, 8]} />
          <meshStandardMaterial attach="material" color="#ff9800" />
        </mesh>
      </Suspense>
    </group>
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

  return <Stars ref={stars} />;
};

type StarsCanvasProps = {
  orbit?: boolean;
  noOrbitals?: boolean;
};

const StarsCanvas = ({ orbit, noOrbitals }: StarsCanvasProps) => {
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
          {!noOrbitals && <Orbital />}
          {!noOrbitals && <Orbital2 />}
          {orbit && <OrbitControls />}
        </Canvas>
      </span>
    </div>
  );
};

export default StarsCanvas;
