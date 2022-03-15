//Display.js 
import PosterPic from "./PosterPic.js"
import { useState, useEffect } from 'react'

function Display(props) {
    // console.log(props.moviePosters) 
    // console.log(props.matchedPosters);
    // console.log(props.flippedCards);

    // need to set useState to keep track of the values of the cards clicked IN THIS COMPONENT--b/c it's the one that sees the 'big picture' and can compare the items
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    // create a function to pass to PosterPic.js to retrieve the value of the card that's been clicked
    const handleChoice = function (card) {
        // console.log('card', choiceOne)

        // if choiceOne is set, then update choiceTwo, else update choiceOne
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }


    // create a useEffect that will compare choiceOne and choiceTWO values ONLY after they have been assigned
    useEffect(() => {
        if (choiceOne && choiceTwo) {

            if (choiceOne === choiceTwo) {
                // console.log('we have a match!', choiceOne, choiceTwo);

                // create a .map that will target the matched attribute in props and change it to true and return it as a new array
                const matched = props.matchedPosters(props.moviePosters, choiceOne);
                // console.log(props.moviePosters)

                // access setFinalSelections which has been passed down as a function and we update it with the new array
                props.flippedCards(matched);
                // console.log(props.moviePosters);
                
                reset()
            } else {
                // console.log('not a match');
                setTimeout( () => {
                    reset()
                }, 1000)
            }

        }
    }, [choiceOne, choiceTwo])



    // reset function to set choice states to null
    const reset = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        // stretch goal: add a counter to setTurns()
        console.log('reset')
    }


    return (
        <div className="cardContainer">
            {  
                props.moviePosters.map( (poster) => {
                    // poster is the prop handed down to PosterPic.js
                    return (
                        <PosterPic 
                        img={poster.image} 
                        alt={poster.title} 
                        key={poster.id}
                        handleChoice={handleChoice}
                        flipped={ poster === choiceOne || poster === choiceTwo || poster.matched === true}
                        />
                    )
                })
            }
        </div>
    )
}

export default Display;