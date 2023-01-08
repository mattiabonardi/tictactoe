import styles from "../styles/pages/index.module.css";
import { CustomButton } from "../components/customButton";
import ReplayIcon from "@mui/icons-material/Replay";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

interface ActionsProps {
    startGameFN: () => Promise<void>
    toHomeFN: () => Promise<void>
}

export const Actions: React.FC<ActionsProps> = (props) => {
    return (
        <div className={styles.actions}>
            <CustomButton
                variant="contained"
                startIcon={<ReplayIcon className={styles.largeIcon} />}
                size="large"
                color="primary"
                onClick={() => {
                props.startGameFN()
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
                props.toHomeFN()
                }}
            >
                EXIT
            </CustomButton>
        </div>
    )
};