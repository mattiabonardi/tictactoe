import type { NextPage } from "next";
import styles from "../styles/pages/index.module.css";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Board } from "../declarations/game";
import { createEmptyBoard } from "../managers/gameManager";

const Index: NextPage = () => {
  return (
    <div className={styles.scene}>
      <Canvas>
        <Chessboard></Chessboard>
        <CameraController></CameraController>
      </Canvas>
    </div>
  );
};

function Chessboard(props) {
  const [hovered, setHovered] = useState(false);
  const [board, setBoard] = useState<Board>(createEmptyBoard());

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  function onClick(event) {
    // getting coordinates from event data
    const row: number = event.eventObject.userData[0];
    const col: number = event.eventObject.userData[1];
    // check if position is already occuped else ignore
    if (board[row][col] != "_") {
      // set value
      board[row][col] = "o";
      // change mesh color
    }
  }

  return (
    <>
      <mesh
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[-2, 2, 0]}
        userData={[0, 0]}
      >
        <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
        <meshBasicMaterial color="#BABABA" attach="material" />
      </mesh>
      <mesh
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[0, 2, 0]}
        userData={[0, 1]}
      >
        <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
        <meshBasicMaterial color="#BABABA" attach="material" />
      </mesh>
      <mesh
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[2, 2, 0]}
        userData={[0, 2]}
      >
        <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
        <meshBasicMaterial color="#BABABA" attach="material" />
      </mesh>
      <mesh
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[-2, 0, 0]}
        userData={[1, 0]}
      >
        <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
        <meshBasicMaterial color="#BABABA" attach="material" />
      </mesh>
      <mesh
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[0, 0, 0]}
        userData={[1, 1]}
      >
        <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
        <meshBasicMaterial color="#BABABA" attach="material" />
      </mesh>
      <mesh
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[2, 0, 0]}
        userData={[1, 2]}
      >
        <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
        <meshBasicMaterial color="#BABABA" attach="material" />
      </mesh>
      <mesh
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[-2, -2, 0]}
        userData={[2, 0]}
      >
        <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
        <meshBasicMaterial color="#BABABA" attach="material" />
      </mesh>
      <mesh
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[0, -2, 0]}
        userData={[2, 1]}
      >
        <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
        <meshBasicMaterial color="#BABABA" attach="material" />
      </mesh>
      <mesh
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[2, -2, 0]}
        userData={[2, 2]}
      >
        <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
        <meshBasicMaterial color="#BABABA" attach="material" />
      </mesh>
    </>
  );
}

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

export default Index;
