import { getByText, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Movie from './components/Movies/Movie/Movie';
import Movies from './components/Movies/Movies';
import MovieTitles from './components/MovieTitles/MovieTitles';
import Home from './Home';

test('Home displays expected components', () => {
  render(<MemoryRouter><Home /></MemoryRouter>);

  // Header
  const header = document.querySelector("header");
  const headerText = getByText(header, "DEMO Streaming");

  // Subheader
  const subheading = document.querySelector("section");
  const subheadingText = getByText(subheading, "Popular Titles");

  // Main Content
  const mainContentDivElement = document.querySelector("main > div");

  // Footer
  const footer = document.querySelector("footer");
  const footerText = getByText(footer, "Copyright © 2016 DEMO Streaming. All rights reserved");

  expect(headerText).toBeInTheDocument();
  expect(subheadingText).toBeInTheDocument();
  expect(mainContentDivElement).toBeInTheDocument();
  expect(footerText).toBeInTheDocument();
});

test('Series route displays expected heading', () => {
  render(<MemoryRouter initialEntries={["/series"]}><Home /></MemoryRouter>);

  // Header
  const header = document.querySelector("header");
  const headerText = getByText(header, "DEMO Streaming");

  // Subheader
  const subheading = document.querySelector("section");
  const subheadingText = getByText(subheading, "Popular Series");

  // Main Content
  const mainContentDivElement = document.querySelector("main > div");

  // Footer
  const footer = document.querySelector("footer");
  const footerText = getByText(footer, "Copyright © 2016 DEMO Streaming. All rights reserved");

  expect(headerText).toBeInTheDocument();
  expect(subheadingText).toBeInTheDocument();
  expect(mainContentDivElement).toBeInTheDocument();
  expect(footerText).toBeInTheDocument();
});

test('Movie route displays expected heading', () => {
  render(<MemoryRouter initialEntries={["/movie"]}><Home /></MemoryRouter>);

  // Header
  const header = document.querySelector("header");
  const headerText = getByText(header, "DEMO Streaming");

  // Subheader
  const subheading = document.querySelector("section");
  const subheadingText = getByText(subheading, "Popular Movies");

  // Main Content
  const mainContentDivElement = document.querySelector("main > div");

  // Footer
  const footer = document.querySelector("footer");
  const footerText = getByText(footer, "Copyright © 2016 DEMO Streaming. All rights reserved");

  expect(headerText).toBeInTheDocument();
  expect(subheadingText).toBeInTheDocument();
  expect(mainContentDivElement).toBeInTheDocument();
  expect(footerText).toBeInTheDocument();
});

test('Routes that do not exist displays the expected unknown', () => {
  render(<MemoryRouter initialEntries={["/unknown"]}><Home /></MemoryRouter>);

  // Header
  const header = document.querySelector("header");
  const headerText = getByText(header, "DEMO Streaming");

  // Subheader
  const subheading = document.querySelector("section");
  const subheadingText = getByText(subheading, "Unknown Page");

  // Main Content
  const mainContentDivElement = document.querySelector("main > div");

  // Body Text
  const bodyText = screen.getByText("Sorry, the page you are looking for doesn't exist");

  // Footer
  const footer = document.querySelector("footer");
  const footerText = getByText(footer, "Copyright © 2016 DEMO Streaming. All rights reserved");

  expect(headerText).toBeInTheDocument();
  expect(subheadingText).toBeInTheDocument();
  expect(mainContentDivElement).toBeInTheDocument();
  expect(bodyText).toBeInTheDocument();
  expect(footerText).toBeInTheDocument();
});

test('Movies component displays correctly when movies unable to load', () => {
  render(<Movies />);
  const moviesText = screen.getByText("Oops, something went wrong...");
  expect(moviesText).toBeInTheDocument();
});

test('Movies component displays loading correctly', () => {
  render(<Movies isLoading={true} />);
  const moviesText = screen.getByText("Loading...");
  expect(moviesText).toBeInTheDocument();
});

test('Movies component displays correctly with movies', () => {
  const movies = [
    {
      "title": "Wolf Creek",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "programType": "series",
      "images": {
        "Poster Art": {
          "url": "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg",
          "width": 1000,
          "height": 1500
        }
      },
      "releaseYear": 2016
    },
    {
      "title": "No Activity",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "programType": "series",
      "images": {
        "Poster Art": {
          "url": "https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg",
          "width": 1000,
          "height": 1500
        }
      },
      "releaseYear": 2015
    },
  ];
  render(<Movies movies={movies} />);
  const wolfCreekText = screen.getByText("Wolf Creek");
  const noActivityText = screen.getByText("No Activity")
  expect(wolfCreekText).toBeInTheDocument();
  expect(noActivityText).toBeInTheDocument();
});

test('Movie titles component display correctly with movie titles', () => {
  const movieTitles = [
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
  ];
  render(<MemoryRouter><MovieTitles movieTitles={movieTitles} /></MemoryRouter>);
  const movieTitleSeries = screen.getByText("Series");
  const movieTitleMovies = screen.getByText("Movies")
  expect(movieTitleSeries).toBeInTheDocument();
  expect(movieTitleMovies).toBeInTheDocument();
});

test('Movie titles component display correctly without movie titles', () => {
  render(<MemoryRouter><MovieTitles /></MemoryRouter>);
  const movieTitleSeries = screen.getByText("No movie titles to display");
  expect(movieTitleSeries).toBeInTheDocument();
});

test('Movie component display correctly as Movie', () => {
  render(<Movie title="title" artUrl="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg" />);
  const movieTitle = screen.getByText("title");
  const movieImage = screen.getByRole("img");
  expect(movieTitle).toBeInTheDocument();
  expect(movieImage).toBeInTheDocument();
});

test('Movie component display correctly as Movie Title', () => {
  render(<Movie title="title" text="text" />);
  const movieText = screen.getByText("text");
  const movieTitle = screen.getByText("title");
  expect(movieText).toBeInTheDocument();
  expect(movieTitle).toBeInTheDocument();
});