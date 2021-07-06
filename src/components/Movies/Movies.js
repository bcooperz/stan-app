import styles from "./Movies.module.css"
import Movie from "./Movie/Movie";

const Movies = (props) => {
    const movies = props.isLoading 
     ? <p>Loading...</p>
     : props.movies 
     ? props.movies.map(m => <Movie title={m.title} text={m.text} key={m.title} artUrl={m.images["Poster Art"].url} />)
     : <p>Oops, something went wrong...</p>;

    return (
        <div className={styles["movies-container"]}>
            {movies}
        </div>
    );
}

export default Movies;