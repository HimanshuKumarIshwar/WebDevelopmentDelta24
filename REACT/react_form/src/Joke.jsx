import React, { useEffect, useState } from 'react'

function Joke() {
    const [joke, setJoke] = useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke"

    const getJoke = async()=> {
         const response = await fetch(URL)
         const jsonResponse = await response.json();
        //  console.log(jsonResponse);
         setJoke({setup:jsonResponse.setup, punchline: jsonResponse.punchline})
    }
    useEffect(()=> {
        async function getFirstJoke(){
            const response = await fetch(URL)
         const jsonResponse = await response.json();
         setJoke({setup:jsonResponse.setup, punchline: jsonResponse.punchline})

        }
        getFirstJoke();
    }, [])

  return (
    <div>

        <h1>Joke</h1>
        <h3>{joke.setup}</h3>
        <p>{joke.punchline}</p>
        <button onClick={getJoke}>Jet New Joke</button>
    </div>
  )
}

export default Joke