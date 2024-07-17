// import React, { useEffect, useState } from 'react'

// const App = () => {

// const[dogImages, setDogImages]= useState([]);
// const [isLoaded, setIsLoaded] = useState(false);

// useEffect(()=>{
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((data)=>{
//         setDogImages(data.message)
//         setIsLoaded(true);
//     })
// },[])
//     if (!isLoaded) return <p>Loading...</p>; 
//     return (
//         <div>
            
//             <image> src= {dogImages} alt= "A Random Dog"</image>
    
//         </div>
//     )
// }

// export default App;



import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);
        setIsLoading(false); 
      });
  }, []);
  

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;

