import React from 'react';

function Meme (){
    
    // handle chnage of inputs
    const handleChange = event => {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    // meme state
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randImage: "https://i.imgflip.com/1g8my4.jpg"
    })
    
    // allMeme image state
    const[allMemes, setallMemes] = React.useState([]) 
    
    // get new image from api
    const getMemeImage = () => {
        const randNumber = Math.floor(Math.random() * allMemes.length);
        // change randImage to a new one
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                randImage: allMemes[randNumber].url
            }
        })
    } 

    // fetch data from the api
    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setallMemes(data.data.memes))
    }, [])
    return (
        <main>
            <div className="form">
                <input
                    className="form--input" 
                    type="text" 
                    placeholder="Shut up"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className="form--input"  
                    type="text" 
                    placeholder="And take my money"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className="meme--container">
                <img className='meme--image' src={meme.randImage}/>
                <h1 className="meme--text top">{meme.topText}</h1>
                <h1 className="meme--text bottom">{meme.bottomText}</h1>
            </div>
        </main>
    )
}

export default Meme