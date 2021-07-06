import styles from './Subheader.module.css';

const Subheader = (props) => {
    return (
        <section className={styles["page-subheader"]}>
            {props.subheading}
        </section>
    );
}

export default Subheader;