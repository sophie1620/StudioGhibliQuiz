import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Display from './component/Display.js';


function App() {
<<<<<<< HEAD
  const [ movies, setMovies ] = useState([])
  const [baseUrl, setBaseUrl] = useState('https://ghibliapi.herokuapp.com/films')
  // const [ selectedMovies, setSelectedMovies ] = useState([])
  // const [ slicedMovies, setSlicedMovies ] = useState([])
  const [ finalSelections, setFinalSelections ] = useState([])

=======
  const [ apiResults, setApiResults ] = useState([])
  const [ finalCardSelections, setFinalCardSelections ] = useState([])
>>>>>>> apidata

  // shuffle function to shuffle the items and return a new array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array
  }
  
<<<<<<< HEAD

  // // take the data that is received from API and shuffle it in handleClick
  // function handleClick() {
  //   console.log('clicked');
  //   // setShuffledMovies(newArray);
  //   const shuffledItems = shuffleArray(movies)
    
  //   const doubled = [... shuffledItems]
    
  //   const newFinalArray = doubled.slice(0, 6)
  //   setSelectedMovies(shuffledItems)
  //   setSlicedMovies(newFinalArray)


  //   console.log(' sliced Movies', slicedMovies);
  //   }
  
  
  // function sliced() {
  //   setSplicedMovies(selectedMovies.slice(6));
  // }

  // console.log(splicedMovies);


  // making a new array (ghibliMovies) with the information needed for the app (title, image, and id)
  const ghibliMovies = []

  movies.map(function(movie) {
      // create an object for each movie, and push object into the ghibliMovies array
    const movieData = {
      title: movie.title,
      image: movie.image,
      id: movie.id,
      matched: false
    }
    return (
      ghibliMovies.push(movieData)
    )
  })
  // console.log('newArray', ghibliMovies);

  
  // cloning the ghibliMovies array so that we can create paired cards for users to match
  const clone = JSON.parse(JSON.stringify(ghibliMovies));
    // changing the #ids for the newly cloned array, so that each item has a unique #id
  clone.map( function(item) {
    return (
      item.id = item.id + 99
    )
  })

  // concatonating the two arrays together so that the 6 pairs of cards can be displayed on screen
  const combinedArray = ghibliMovies.concat(clone);

  // shuffing the 12 cards, so that the order is displayed at random
  // console.log('posters', posters);
  const posters = shuffleArray(combinedArray);
  // console.log(posters);


  // delay the update to the finalSelections state with a useEffect because it will continue to make an API call otherwise ~ I have no idea why
  // use this finalSelections array to pass as a prop to Display.js to change the matched key to true to disable their 'flip-ability'
  useEffect( () => {
    setFinalSelections(posters)
  }, [movies])

  // console.log('posters', posters)

  
=======
>>>>>>> apidata
  // function that will map through the array to change the matched attribute
  const trueMatch = function(array, choice) {
    array.map( function(item) {
      if (item.image === choice) {
        
        return item.matched = true
        // console.log(item, item.matched)

      } else {
        return item.image
      }
    })
    return array
  }
// console.log(trueMatch(finalSelections));

// create a function that will set the FinalSelections array with the newly updated array that is returned in the trueMatch()
  const updateFinalSelections = function(array) {
    setFinalCardSelections(array);
  }
  
<<<<<<< HEAD
// page reload button to set a new game
  function handleClick(e) {
    // window.location.reload(false);
    e.preventDefault(e);
    console.log(e.target.value);
    if (baseUrl === '') {
      setBaseUrl(e.target.value)
    } else {
      setBaseUrl('')
    }
=======

  function handleClick() {

    // console.log(apiResults);
    const shuffledApiResults = shuffleArray(apiResults)
    // setShuffledMovies(newArray);

    //take only 6 of the items from the array
    const finalApiArray = shuffledApiResults.slice(0, 6)
    
    // making a new array (ghibliMovies) with the information needed for the app (title, image, and id)
    const ghibliMovies = []

    finalApiArray.map(function (movie) {
      // create an object for each movie, and push object into the ghibliMovies array
      const movieData = {
        title: movie.title,
        image: movie.image,
        id: movie.id,
        matched: false
      }
      return (
        ghibliMovies.push(movieData)
      )
    })
    // console.log(ghibliMovies)

    // cloning the ghibliMovies array so that we can create paired cards for users to match
    const clone = JSON.parse(JSON.stringify(ghibliMovies));

    // changing the #ids for the newly cloned array, so that each item has a unique #id
    clone.map(function (item) {
      return (
        item.id = item.id + 99
      )
    })

    // concatonating the two arrays together so that the 6 pairs of cards can be displayed on screen
    const allGhibliResults = ghibliMovies.concat(clone);

    // shuffing the 12 cards, so that the order is displayed at random
    // console.log('posters', posters);
    const posterCards = shuffleArray(allGhibliResults);
    // console.log(posters);

    setFinalCardSelections(posterCards)
>>>>>>> apidata
  }
  

  // getting the API calls
  useEffect( () => {
    axios({
      url: 'https://ghibliapi.herokuapp.com/films', 
    }).then((apiData) => {
      // console.log(apiData.data);
      
<<<<<<< HEAD
      const shuffledThings =  shuffleArray(apiData.data).splice(6, 6);  
      setMovies(shuffledThings);
=======
      setApiResults(apiData.data)
      // setSelectedMovies(apiData.data)
>>>>>>> apidata
    })
  }, [])


  return (
    <div className="App">
      <header> 
        <img className='totoro' src="/assets/totoro.png" alt="" />
        <h1>Do you remember Ghilbi?</h1>
      </header>

      <main className='wrapper'>
        <p className='instructions'>Test your memory! Find the matching pairs by clicking on each card to reveal it.  </p>

        <button value='https://ghibliapi.herokuapp.com/films' onClick={handleClick}>New Game</button>

        <div className='gameContainer wrapper'>
          <Display cardSelections={ finalCardSelections } matchedCards={trueMatch} flippedCards={updateFinalSelections} />
          {/* {/* pass in the final poster array as props to Display.js */}
        </div>

        <img className='totoroPic' src="/assets/totoro.png" alt="" />
      </main>
      <footer>
        <p>Created and designed by <a href="sophielai.ca">Sophie Lai</a></p>
        <p>API courtesy of <a href="https://ghibliapi.herokuapp.com/#">Studio Ghibli API</a></p>
      </footer>


    </div>
  );
}

export default App;


// MVP:
  // make API call with axios
  // parse API data array into movies (the array in useState)
      // use randomizer function (component#1?) to select 6 random movies from the movies array and use setMovies sto make new array (save movie poster and id into the array)
          // use for loop to loop through each card to show a toggle-display function (component?)
              // will either display picture, show the back of the card ~ a flip function?
      // duplicate the array so that there are two sets and combine the two sets into one main array (component?)
          // use Fischer-Yates algorithm to shuffle through the cards to return a new array (component)
          // append the newly shuffled array to the DOM (component) ~ use .map()
          // using the onClick event listener, the toggle-display function will be called (previously mentioned in line 9)
          // if the opened cards have matching ids/movie poster path, then the user wins (component) ~matching cards stays facing up (have th flip function??) be disabled
                // else the user clicks to close the card and plays again