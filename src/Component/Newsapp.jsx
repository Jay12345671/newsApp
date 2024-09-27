// import React, { useState } from 'react'
// import Card from './card'


// const Newsapp = () => {

//   const API_KEY = "0d37ca1038f64996b3b2936f78199837";

// const getData = async() =>{

//     const [search, setSearch] = useState("india")
//    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
//    const jsonData = await response.json();
//    console.log(jsonData)
// }


// const handleInput = (e) => { 
//     console.log(e.target.value)
//     setSearch(e.target.value)
// }


//   return (
//     <div>
//       <div>
//         <nav>
//             <div>
//                 <h1>Trendy News</h1>
//             </div>
//             <ul>
//             <a>All News</a>
//             <a>Trending</a>
//             </ul>


//             <div className='searchBar'>
//                     <input type='text' placeholder='Search News' onChange={handleInput}/>
//                     <button onClick={getData}>Search</button>
//                 </div>
//         </nav>
//           <p className='head'>Stay Update with TrendyNews</p>

//                 <div className='categoryBtn'>
//                     <button>Sport</button>
//                     <button>Politics</button>
//                     <button>Entertainment</button>
//                     <button>Health</button>
//                     <button>Fitness</button>
//                 </div>
//       </div>

//       <div>
//         <Card/>
//       </div>
//     </div>
//   )
// }

// export default Newsapp


import React, { useEffect, useState } from 'react';
import Card from './Card';

const API_KEY = "0d37ca1038f64996b3b2936f78199837";

const Newsapp = () => {
  const [search, setSearch] = useState("Hindustan");  // Moved search state inside the Newsapp component

  const [newsData, setNewsData] = useState(null)

  // Moved getData function inside Newsapp component
  const getData = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles)
    } catch (error) {
      console.error("Error fetching the data", error);  // Added error handling
    }
  };


  useEffect(()=>{
    getData()
  },[])
  // Moved handleInput function inside Newsapp component
  const handleInput = (e) => {
    setSearch(e.target.value);  // Removed the undefined console() and replaced it with setSearch
    console.log(e.target.value);  // Corrected console.log to avoid errors
  };

  const userInput = (event) =>{
    setSearch(event.target.value)
  }
  return (
    <div>
      <div>
        <nav>
          <div>
            <h1 className='trendy'>Trendy News</h1>
          </div>
          <ul>
            <a>All News</a>
            <a>Trending</a>
          </ul>
          <div className="searchBar">
            <input type="text" placeholder="Search News" value = {search} onChange={handleInput} />  {/* Updated onChange to use handleInput */}
            <button onClick={getData}>Search</button>  {/* Updated onClick to use getData */}
          </div>
        </nav>
        <p className="head">Stay Updated with Trendy News</p>
        <div className="categoryBtn">
          <button onClick={userInput} value="sports">Sport</button>
          <button onClick={userInput} value="politics">Politics</button>
          <button onClick={userInput} value="entertainment">Entertainment</button>
          <button onClick={userInput} value="health">Health</button>
          <button onClick={userInput} value="fitness">Fitness</button>
        </div>
      </div>
      <div>

      {newsData ?  <Card  data ={newsData}/> : null }
    
      </div>
    </div>
  );
};

export default Newsapp;
