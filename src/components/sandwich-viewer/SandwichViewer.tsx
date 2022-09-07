/* eslint-disable react/no-unknown-property */
import React, { useEffect } from 'react';
import {
  Canvas,
  ThreeElements,
  useLoader,
  useThree,
} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {
  Color,
  MeshStandardMaterial,
} from 'three';

function CameraController() {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(
      camera,
      gl.domElement,
    );
    controls.minDistance = 2;
    controls.maxDistance = 5;
    controls.reset();
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
}

function Bread(
  props: ThreeElements['group'] & {
    breadType: string;
  },
) {
  const { breadType, ...groupProps } = props;
  const result = useLoader(
    GLTFLoader,
    `./assets/models/bread-${breadType}.glb`,
  );

  return (
    <group {...groupProps} dispose={null}>
      <primitive object={result.scene} />
    </group>
  );
}

function Filling(
  props: ThreeElements['group'] & {
    fillingType: string;
  },
) {
  const { fillingType, ...groupProps } = props;
  const result = useLoader(
    GLTFLoader,
    `./assets/models/filling-${fillingType}.glb`,
  );

  return (
    <group {...groupProps} dispose={null}>
      <primitive object={result.scene} />
    </group>
  );
}

function Flag(
  props: ThreeElements['group'] & {
    color: string;
  },
) {
  const result = useLoader(
    GLTFLoader,
    './assets/models/flag.glb',
  );

  (
    result.materials
      .colorFlagMaterial as MeshStandardMaterial
  ).color = new Color(props.color);

  return (
    <group {...props} dispose={null}>
      <primitive object={result.scene} />
    </group>
  );
}

function SandwichViewer(props: {
  partItemSelected: Record<string, string>;
}) {
  return (
    <Canvas>
      <CameraController />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {/* Breads */}
      <Bread
        position={[0, 0, 0]}
        breadType={
          props.partItemSelected['bread']
        }
      />

      {/* Filling */}
      <Filling
        position={[0, 0, 0]}
        fillingType={
          props.partItemSelected['filling']
        }
      />

      {/* Flag */}
      <Flag
        color={props.partItemSelected['flag']}
      />
    </Canvas>
  );
}

export default SandwichViewer;
