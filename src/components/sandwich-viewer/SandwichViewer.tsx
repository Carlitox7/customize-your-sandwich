/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from 'react';
import {
  Canvas,
  ThreeElements,
  ThreeEvent,
  useLoader,
  useThree,
} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Color, MeshStandardMaterial } from 'three';

function CameraController() {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 2;
    controls.maxDistance = 3;
    camera.position.z = 3;
    // controls.reset();
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
}

function Bread(
  props: ThreeElements['group'] & {
    breadType: string;
    onClick?: (event: ThreeEvent<MouseEvent>) => void;
  },
) {
  const ref = useRef<THREE.Group>(null!);

  const { breadType, onClick, ...groupProps } = props;
  const result = useLoader(
    GLTFLoader,
    `./assets/models/bread-${breadType}.glb`,
  );

  useEffect(() => {
    for (const matKey in result.materials) {
      const material = result.materials[matKey] as MeshStandardMaterial;
      material.roughness = 0.5;
      material.metalness = 0;
    }
  }, [result]);

  return (
    <group ref={ref} {...groupProps} dispose={null}>
      {result.nodes.Scene.children.map((obj) => (
        <primitive
          key={obj.uuid}
          object={obj}
          parent={ref.current}
          onClick={onClick}
        />
      ))}
    </group>
  );
}

function Filling(
  props: ThreeElements['group'] & {
    fillingType: string;
    onClick?: (event: ThreeEvent<MouseEvent>) => void;
  },
) {
  const ref = useRef<THREE.Group>(null!);

  const { fillingType, onClick, ...groupProps } = props;
  const result = useLoader(
    GLTFLoader,
    `./assets/models/filling-${fillingType}.glb`,
  );

  useEffect(() => {
    for (const matKey in result.materials) {
      const material = result.materials[matKey] as MeshStandardMaterial;
      material.roughness = 0.5;
      material.metalness = 0;
    }
  }, [result]);

  return (
    <group ref={ref} {...groupProps} dispose={null}>
      {result.nodes.Scene.children.map((obj) => (
        <primitive
          key={obj.uuid}
          object={obj}
          parent={ref.current}
          onClick={onClick}
        />
      ))}
    </group>
  );
}

function Flag(
  props: ThreeElements['group'] & {
    color: string;
    onClick?: (event: ThreeEvent<MouseEvent>) => void;
  },
) {
  const ref = useRef<THREE.Group>(null!);

  const { color, onClick, ...groupProps } = props;
  const result = useLoader(GLTFLoader, './assets/models/flag.glb');

  useEffect(() => {
    (result.materials.colorFlagMaterial as MeshStandardMaterial).color =
      new Color(color);
  }, [color]);

  return (
    <group ref={ref} {...groupProps} dispose={null}>
      {result.nodes.Scene.children.map((obj) => (
        <primitive
          key={obj.uuid}
          object={obj}
          parent={ref.current}
          onClick={onClick}
        />
      ))}
    </group>
  );
}

function SandwichViewer(props: {
  className?: string;
  partItemSelected: Record<string, string>;
  onClick?: (value: string) => void;
}) {
  return (
    <Canvas className={props.className}>
      <CameraController />
      <ambientLight />
      {/* <pointLight position={[0, 5, 0]} intensity={1} /> */}

      {/* Breads */}
      <Bread
        position={[0, 0, 0]}
        breadType={props.partItemSelected['bread']}
        onClick={() => props.onClick?.('bread')}
      />

      {/* Filling */}
      <Filling
        position={[0, 0, 0]}
        fillingType={props.partItemSelected['filling']}
        onClick={() => props.onClick?.('filling')}
      />

      {/* Flag */}
      <Flag
        color={props.partItemSelected['flag']}
        onClick={() => props.onClick?.('flag')}
      />
    </Canvas>
  );
}

export default SandwichViewer;
