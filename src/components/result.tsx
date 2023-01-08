import styles from "../styles/pages/index.module.css";

interface ResultProps {
    type: "draw" | "defeat"| "success";
}

export const Result: React.FC<ResultProps> = (props) => {
    if(props.type == "draw"){
        return (
            <h2 className={styles.draw}>
                draw
            </h2>
        )
    } 
    else if(props.type == "success"){
        return (
            <h2 className={styles.success}>
                great job, you won!
            </h2>
        );
    }
    else {
        return (
            <h2 className={styles.defeat}>
                sorry, you lost
            </h2>
        );
    }
};