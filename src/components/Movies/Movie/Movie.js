import styles from './Movie.module.css';

const Movie = (props) => {
    return (
        <div className={styles["movie-item-container"]}>
            {
                props.text ? 
                    <div className={styles["movie-item"]}>
                        {props.text}
                    </div>
                : <img src={props.artUrl} height="220" width="150" alt={props.text} />
            }
            <p>{props.title}</p>
        </div>
    );
}

export default Movie;