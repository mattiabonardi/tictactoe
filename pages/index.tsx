import type { NextPage } from "next";
import styles from "../styles/pages/index.module.css";
import React, { useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Board, GraphicBoard } from "../declarations/game";
import {
  calculateCpuMove,
  createEmptyBoard,
  createInitialGraphicBoard,
} from "../managers/gameManager";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { CustomButton } from "../components/customButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

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

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  async function onClick(event) {
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
                position={[-1.5, 1.5, 0]}
                userData={[0, 0]}
              >
                <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
                <meshBasicMaterial
                  color={graphicBoard["0.0"].color}
                  attach="material"
                />
              </mesh>
              <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[0, 1.5, 0]}
                userData={[0, 1]}
              >
                <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
                <meshBasicMaterial
                  color={graphicBoard["0.1"].color}
                  attach="material"
                />
              </mesh>
              <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[1.5, 1.5, 0]}
                userData={[0, 2]}
              >
                <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
                <meshBasicMaterial
                  color={graphicBoard["0.2"].color}
                  attach="material"
                />
              </mesh>
              <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[-1.5, 0, 0]}
                userData={[1, 0]}
              >
                <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
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
                <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
                <meshBasicMaterial
                  color={graphicBoard["1.1"].color}
                  attach="material"
                />
              </mesh>
              <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[1.5, 0, 0]}
                userData={[1, 2]}
              >
                <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
                <meshBasicMaterial
                  color={graphicBoard["1.2"].color}
                  attach="material"
                />
              </mesh>
              <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[-1.5, -1.5, 0]}
                userData={[2, 0]}
              >
                <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
                <meshBasicMaterial
                  color={graphicBoard["2.0"].color}
                  attach="material"
                />
              </mesh>
              <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[0, -1.5, 0]}
                userData={[2, 1]}
              >
                <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
                <meshBasicMaterial
                  color={graphicBoard["2.1"].color}
                  attach="material"
                />
              </mesh>
              <mesh
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                position={[1.5, -1.5, 0]}
                userData={[2, 2]}
              >
                <sphereBufferGeometry args={[0.4, 30, 30]} attach="geometry" />
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
          <header className={styles.header}>
            <h1 className={styles.title}>TIC TAC TOE DDD</h1>
          </header>
          <div className={styles.resultContainer}>
            <h3 className={styles.resultLabel}>result</h3>
            <h2 className={styles.defeat}>DEFEAT</h2>
          </div>
          <div className={styles.actions}>
            <CustomButton
              variant="contained"
              startIcon={<ReplayIcon className={styles.largeIcon} />}
              size="large"
              color="primary"
              onClick={() => {
                startGame();
              }}
            >
              RESTART
            </CustomButton>
            <CustomButton
              variant="text"
              startIcon={<ExitToAppIcon className={styles.largeIcon} />}
              size="large"
              color="primary"
              onClick={() => {
                toHome();
              }}
            >
              EXIT
            </CustomButton>
          </div>
        </>
      );
    case 1:
      return (
        <>
          <header className={styles.header}>
            <h1 className={styles.title}>TIC TAC TOE DDD</h1>
          </header>
          <div className={styles.resultContainer}>
            <h3 className={styles.resultLabel}>result</h3>
            <h2 className={styles.success}>
              Great job, you found my AI bug !!!
            </h2>
          </div>
          <div className={styles.actions}>
            <CustomButton
              variant="contained"
              startIcon={<ReplayIcon className={styles.largeIcon} />}
              size="large"
              color="primary"
              onClick={() => {
                startGame();
              }}
            >
              RESTART
            </CustomButton>
            <CustomButton
              variant="text"
              startIcon={<ExitToAppIcon className={styles.largeIcon} />}
              size="large"
              color="primary"
              onClick={() => {
                toHome();
              }}
            >
              EXIT
            </CustomButton>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <header className={styles.header}>
            <h1 className={styles.title}>TIC TAC TOE DDD</h1>
          </header>
          <div className={styles.resultContainer}>
            <h3 className={styles.resultLabel}>result</h3>
            <h2 className={styles.result}>DRAW</h2>
          </div>
          <div className={styles.actions}>
            <CustomButton
              variant="contained"
              startIcon={<ReplayIcon className={styles.largeIcon} />}
              size="large"
              color="primary"
              onClick={() => {
                startGame();
              }}
            >
              RESTART
            </CustomButton>
            <CustomButton
              variant="text"
              startIcon={<ExitToAppIcon className={styles.largeIcon} />}
              size="large"
              color="primary"
              onClick={() => {
                toHome();
              }}
            >
              EXIT
            </CustomButton>
          </div>
        </>
      );
    case 3:
      return (
        <>
          <header className={styles.header}>
            <h1 className={styles.title}>TIC TAC TOE DDD</h1>
          </header>
          <div className={styles.main}>
            <div className={styles.start}>
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
            </div>
          </div>
          <footer className={styles.footer}>
            <Button
              variant="text"
              startIcon={<GitHubIcon />}
              size="large"
              color="primary"
              onClick={() => {
                toGitHub();
              }}
            >
              GITHUB
            </Button>
          </footer>
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

const toGitHub = () => {
  window.open("https://github.com/mattiabonardi/tictactoe-ddd", "_blank");
};

export default Index;
