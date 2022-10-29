import './App.css';
import { useState } from 'react';
import movie1 from "./images/movie1.jpeg";
import movie2 from "./images/movie2.jpg";
import movie3 from "./images/movie3.jpg";
import movie4 from "./images/movie4.jpg";
import movie5 from "./images/movie5.jpg";
import movie6 from "./images/movie6.jpg";
import MoviesList from './MoviesList';
import Search from './Search';
import {Routes ,Route} from "react-router-dom";


function App(){
const [nameSearch, setNameSearch] = useState('')
const [rateSearch, setRateSearch] = useState('')
const [movies, setMovies] = useState(
  [
    {
      id: Math.random(),
      title: "LE RETOUR",
      img: movie1,
      rating: 5,
      desc: "It tells the story of two Russian boys whose father suddenly returns home after a 12-year absence. He takes the boys on a holiday to a remote island on a lake that turns into a test of manhood of almost mythic proportions",
    },
    {
      id: Math.random(),
      title: "THE REVENANT",
      img: movie2,
      rating: 5,
      desc: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
    },
    {
      id: Math.random(),
      title: "DOGS OF BERLIN",
      img: movie3,
      rating: 3,
      desc: "A politically sensitive murder forces two disparate detectives into a battle with the Berlin underworld and a confrontation with their own corruption.",
    },
    {
      id: Math.random(),
      title: "GREEN BOOK",
      img: movie4,
      rating: 2,
      desc: "A working-class Italian-American bouncer becomes the driver for an African-American classical pianist on a tour of venues through the 1960s American South.",
    },
    {
      id: Math.random(),
      title: "DUNE",
      img: movie5,
      rating: 5,
      desc: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    },
    {
      id: Math.random(),
      title: "JOKER",
      img: movie6,
      rating: 4,
      desc: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
    },
  ]
)

const search = (text) =>{
   setNameSearch(text)
}
const byrate = (rate) =>{
  setRateSearch(rate)
}
const addMovie = (movie) =>{
  setMovies(movies.concat(movie))
}

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<div>
      <Search search = {search} byrate={byrate} rateSearch={rateSearch}></Search>
      <MoviesList movies = {movies.filter(el=>el.rating>= rateSearch  && el.title.toLowerCase().includes(nameSearch.toLowerCase()))}
      addMovie={addMovie}></MoviesList>
      </div>}/>
      </Routes>
    </div>
  );
}

export default App;
