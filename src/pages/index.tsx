import type { NextPage } from "next";
import styles from "../styles/pages/index.module.css";
import React, { useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Board, GraphicBoard } from "../declarations/game";
import {
  calculateCpuMove,
  createEmptyBoard,
  createInitialGraphicBoard
} from "../managers/gameManager";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { CustomButton } from "../components/customButton";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Result } from "../components/result";
import { Actions } from "../components/actions";

const Index: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Chessboard></Chessboard>
      </div>
    </>
  );
};

function Chessboard(_props) {
  const [hovered, setHovered] = useState(false);
  const [status, setStatus] = useState<number>(3);
  const [board, setBoard] = useState<Board>(createEmptyBoard());
  const [graphicBoard, setGraphicBoard] = useState<GraphicBoard>(
    createInitialGraphicBoard()
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  async function onClick(event) {
    // ignore if is loading true
    if(!loading){
      setLoading(true);
      // getting coordinates from event data
      const row: number = event.eventObject.userData[0];
      const col: number = event.eventObject.userData[1];
      // check if position is already occuped else ignore
      if (board[row][col] == "_") {
        // set value
        board[row][col] = "o";
        // change mesh color for user
        setGraphicBoard((value) => {
          return {
            ...value,
            [row + "." + col]: {
              color: "#ff0000",
              value: "o",
            },
          };
        });
        // change position value
        await setBoard((value) => {
          value[row][col] = "o";
          return value;
        });
        // get cpu step
        const { move, status } = await calculateCpuMove(board);
        // change mesh color for CPU
        if (move.row > -1 && move.col > -1 && status < 0) {
          setGraphicBoard((value) => {
            return {
              ...value,
              [move.row + "." + move.col]: {
                color: "#0000ff",
                value: "x",
              },
            };
          });
          // change position value
          await setBoard((value) => {
            value[move.row][move.col] = "x";
            return value;
          });
        }
        setStatus(status);
      }
      setLoading(false);
    }
  }

  async function startGame() {
    // reset board & graphic board
    setBoard(createEmptyBoard());
    setGraphicBoard(createInitialGraphicBoard());
    setStatus(-1);
  }

  async function toHome() {
    setStatus(3);
  }

  switch (status) {
    case -1:
      return (
        <>
          <div className={styles.scene}>
            <Canvas>
              <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[-1.2, 1.2, 0]}
                userData={[0, 0]}
              >
                <sphereBufferGeometry args={[0.3, 30, 30]} attach="geometry" />
                <meshBasicMaterial
                  color={graphicBoard["0.0"].color}
                  attach="material"
                />
              </mesh>
              <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[0, 1.2, 0]}
                userData={[0, 1]}
              >
                <sphereBufferGeometry args={[0.3, 30, 30]} attach="geometry" />
                <meshBasicMaterial
                  color={graphicBoard["0.1"].color}
                  attach="material"
                />
              </mesh>
              <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[1.2, 1.2, 0]}
                userData={[0, 2]}
              >
                <sphereBufferGeometry args={[0.3, 30, 30]} attach="geometry" />
                <meshBasicMaterial
                  color={graphicBoard["0.2"].color}
                  attach="material"
                />
              </mesh>
              <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[-1.2, 0, 0]}
                userData={[1, 0]}
              >
                <sphereBufferGeometry args={[0.3, 30, 30]} attach="geometry" />
                <meshBasicMaterial
                  color={graphicBoard["1.0"].color}
                  attach="material"
                />
              </mesh>
              <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[0, 0, 0]}
                userData={[1, 1]}
              >
                <sphereBufferGeometry args={[0.3, 30, 30]} attach="geometry" />
                <meshBasicMaterial
                  color={graphicBoard["1.1"].color}
                  attach="material"
                />
              </mesh>
              <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[1.2, 0, 0]}
                userData={[1, 2]}
              >
                <sphereBufferGeometry args={[0.3, 30, 30]} attach="geometry" />
                <meshBasicMaterial
                  color={graphicBoard["1.2"].color}
                  attach="material"
                />
              </mesh>
              <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[-1.2, -1.2, 0]}
                userData={[2, 0]}
              >
                <sphereBufferGeometry args={[0.3, 30, 30]} attach="geometry" />
                <meshBasicMaterial
                  color={graphicBoard["2.0"].color}
                  attach="material"
                />
              </mesh>
              <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[0, -1.2, 0]}
                userData={[2, 1]}
              >
                <sphereBufferGeometry args={[0.3, 30, 30]} attach="geometry" />
                <meshBasicMaterial
                  color={graphicBoard["2.1"].color}
                  attach="material"
                />
              </mesh>
              <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[1.2, -1.2, 0]}
                userData={[2, 2]}
              >
                <sphereBufferGeometry args={[0.3, 30, 30]} attach="geometry" />
                <meshBasicMaterial
                  color={graphicBoard["2.2"].color}
                  attach="material"
                />
              </mesh>
              <CameraController></CameraController>
            </Canvas>
          </div>
        </>
      );
    case 0:
      return (
        <>
          <Header></Header>
          <main className={styles.main}>
            <div className={styles.resultContainer}>
              <Result type="defeat"></Result>
              <Actions startGameFN={startGame} toHomeFN={toHome}></Actions>
            </div>
          </main>
        </>
      );
    case 1:
      return (
        <>
          <Header></Header>
          <main className={styles.main}>
            <div className={styles.resultContainer}>
              <Result type="success"></Result>
              <Actions startGameFN={startGame} toHomeFN={toHome}></Actions>
            </div>
          </main>
        </>
      );
    case 2:
      return (
        <>
          <Header></Header>
          <main className={styles.main}>
            <div className={styles.resultContainer}>
              <Result type="draw"></Result>
              <Actions startGameFN={startGame} toHomeFN={toHome}></Actions>
            </div>
          </main>
        </>
      );
    case 3:
      return (
        <>
          <Header></Header>
          <main className={styles.main}>
              <CustomButton
                variant="contained"
                startIcon={
                  <PlayArrowRoundedIcon className={styles.largeIcon} />
                }
                size="large"
                color="primary"
                onClick={() => {
                  startGame();
                }}
              >
                START
              </CustomButton>
          </main>
          <Footer></Footer>
        </>
      );
  }
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
