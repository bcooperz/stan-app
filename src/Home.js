import styles from './Home.module.css';
import { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from "./components/UI/Header/Header";
import Subheader from './components/UI/Subheader/Subheader';
import Body from "./components/UI/Body/Body";
import Footer from "./components/UI/Footer/Footer";
import MovieTitles from './components/MovieTitles/MovieTitles';
import Movies from './components/Movies/Movies';
import InvalidSection from './components/UI/InvalidSection/InvalidSection';

class Home extends Component {
  state = {
    siteName: "DEMO Streaming",
    pages: {
      "/": {
        pageSubtitle: "Popular Titles"
      },
      "/series": {
        pageSubtitle: "Popular Series"
      },
      "/movie": {
        pageSubtitle: "Popular Movies"
      },
    },
    movieTitles: [
      {
        title: "Popular Series",
        text: "Series",
        path: "series"
      },
      {
        title: "Popular Movies",
        text: "Movies",
        path: "movie"
      }
    ],
    movies: null,
    isLoading: true
  };

  async componentDidMount() {
    try {
      const response = await fetch("./feed/sample.json");
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const jsonData = await response.json();
      this.setState({
        ...this.state,
        movies: jsonData.entries.filter(e => e.releaseYear >= 2010),
        isLoading: false
      });
    } catch (e) {
      console.log("an error occured loading data", e);
      this.setState({
        ...this.state,
        isLoading: false
      });
    }
  }

  render() {
    const movieTitleRoutes = this.state.movieTitles.map(mt => {
      return (
        <Route path={"/" + mt.path} exact key={mt.path}>
          <Movies 
            movies={this.state.movies ? this.state.movies.filter(m => m.programType === mt.path).slice(0, 21).sort((a, b) => a.title.localeCompare(b.title)) : null}
            isLoading={this.state.isLoading}
          />
        </Route>
      );
    });

    const currentPage = this.state.pages[this.props.location.pathname];
    const pageSubheading = currentPage ? currentPage.pageSubtitle : "Unknown Page";

    return (
      <div className={styles["home-container"]}>
        <Header headerText={this.state.siteName} />
        <Subheader subheading={pageSubheading} />
        <Body>
          <Switch>
            <Route path='/' exact>
              <MovieTitles movieTitles={this.state.movieTitles} />
            </Route>
            {movieTitleRoutes}
            <Route>
              <InvalidSection />
            </Route>
          </Switch>
        </Body>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Home);
