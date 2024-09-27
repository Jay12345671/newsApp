// import React from 'react'

// const Card = ({data}) => {
//   console.log(data);

//   return (
//     <div className='cardContainer'>
//       {data.map((curItem, index)=>{
//         return (
//           <div className='card'>
//             <img src = {curItem.urlToImage}/>
//             <div className='content'>
//               <a className='title'>{curItem.title}</a>
//               <p>{curItem.description}</p>
//               <button>Read More</button>
//             </div>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default Card


import React from 'react';

const Card = ({ data }) => {

  const readMore = (url)=>{
    window.open(url)
  }
  // Add a conditional check to ensure 'data' is defined
  // if (!data || data.length === 0) {
  //   return <p>No data available</p>;  // Optionally render a message when no data is available
  // }

  return (
    <div className='cardContainer'>
      {data.map((curItem, index) => {

        if(!curItem.urlToImage){
          return null
        } else {
        
          return (
          <div className='card' key={index}>
            <img src={curItem.urlToImage}  />  {/* Added 'alt' for accessibility */}
            <div className='content'>
              <a className='title' onClick={() => window.open(curItem.url)} >{curItem.title}</a>
              <p>{curItem.description}</p>
              <button onClick={() => window.open(curItem.url)}>Read More</button>
            </div>
          </div>
        );
        }
      
      })}
    </div>
  );
}

export default Card;
