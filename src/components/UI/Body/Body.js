import styles from "./Body.module.css";

const Body = (props) => {
    return (
        <main className={styles["main-content"]}>
            {props.children}
        </main>
    );
};

export default Body;