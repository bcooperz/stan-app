import styles from "./MovieTitles.module.css"
import Movie from "../Movies/Movie/Movie"
import { NavLink } from 'react-router-dom';

const MovieTitles = props => {
    const movieTitles = props.movieTitles ? props.movieTitles.map(m => <NavLink to={m.path} key={m.title}><Movie title={m.title} text={m.text} /></NavLink>)
    : <p>No movie titles to display</p>;

    return (
        <div className={styles["movie-titles-container"]}>
            {movieTitles}
        </div>
    );
}

export default MovieTitles;