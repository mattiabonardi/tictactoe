import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "../styles/pages/index.module.css";

export const Footer: React.FC = () => {
    return (
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
              source code
            </Button>
          </footer>
    );
};

const toGitHub = () => {
    window.open("https://github.com/mattiabonardi/tictactoe-ddd", "_blank");
};