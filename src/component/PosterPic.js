// PosterPic.js

function PosterPic(props) {
    // console.log('PosterPic Pros', props);

    // create a click event to attach the cardBack to the cardFront
    // pass this value into the choices useState in Display.js so that it can be compared
    const handleClick = function() {
        // console.log(props.img)
        
        // access the function handed down to this component from Display.js
        props.handleChoice(props.img)
    }


    return (
        <div className="indivCard">
            <div className={props.flipped ? 'flipped' : ''}>
                <img className="cardFront" src={props.img} alt={props.alt} />

                <img 
                    className='cardBack' 
                    src="/assets/newCardBack.jpg" alt="card back" 
                    onClick={handleClick}
                /> 
            </div>
        </div>
    )
}

export default PosterPic;