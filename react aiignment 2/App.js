/*import React from 'react';
 import TributePage from './components/1st';

 function App() {
   return (
     <div>
       <TributePage />
     </div>
   );
 }
 
export default App;*/
//<------------ 2nd ----------->
/*import React from 'react';
import StudentRegistrationForm from './components/2nd';

function App() {
  return (
    <div><center>
      <h1>Student Registration Form</h1></center>
      <StudentRegistrationForm />
    </div>
  );
}

export default App;*/
//<--------- 7th --------------->

//<---------- 10th --------->
// import React from 'react';
// import Home from './components/10th';

// function App() {
//   return (
//       <Home />
//   );
// }
// export default App;

//<------------ 3rd ------------------>
// import React from "react";
// import Poto from './components/3rd'

// function App()
// { 
//   return(
//     <Poto />
//   );
// }
// export default App;
//<---------------- 8th ----------->
// import React from "react";
// import Home from "./components/8th";
// import Poto from './components/8th'

// function App()
// { 
//   return(
//     <Home />
//   );
// }

// export default App;
//<------------ 15th ------------->
// import React from 'react';
// import Header from './components/15th'
// function App() {
//   return (
//     <div>
//       <Header />
//     </div>
//   );
// }

// export default App;
//<--------------4th -------------->
// import React, { useEffect, useState } from "react";
// import Recipe from "./components/4th";



// const App = () => {
//   const APP_ID = "6d6687a7";
//   const APP_KEY = "276a106691ab94fd9dec2d5082fe0965";

//   const [recipes, setRecipes] = useState([]);
//   const [search, setSearch] = useState();
//   const [query, setQuery] = useState("avocado");

//   useEffect(() => {
//     getRecipes();
//   }, [query]);

//   const getRecipes = async () => {
//     const response = await fetch(
//       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
//     );
//     const data = await response.json();
//     setRecipes(data.hits);
//     console.log('data.hits',data.hits)
//   };

//   const updateSearch = e => {
//     setSearch(e.target.value);
//     console.log(search);
//   };

//   const getSearch = e => {
//     e.preventDefault();
//     setQuery(search);
//   };

//   return (
  
//     <div className="App">
//       <h1>Welcome to my App</h1>
//       <form onSubmit={getSearch} className="search-form">
//         <input
//           className="search-bar"
//           type="text"
//           value={search}
//           onChange={updateSearch}
//         />
//         <button className="search-button" type="submit">
//           search
//         </button>
//       </form>
//       {recipes.map(recipe => (
//         <Recipe
//           key={recipe.recipe.label}
//           title={recipe.recipe.label}
//           calories={recipe.recipe.calories}
//           image={recipe.recipe.image}
//           ingredients={recipe.recipe.ingredients}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;
//<--------------- 5th ---------------->

// import React, { useState } from 'react';
// const api = {
//   key: "4f8e795dcd6dbf7b9f5276bff095ffc1",
//   base: "https://api.openweathermap.org/data/2.5/"
// }

// function App() {
//   const [query, setQuery] = useState('');
//   const [weather, setWeather] = useState({});

//   const search = evt => {
//     if (evt.key === "Enter") {
//       fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
//         .then(res => res.json())
//         .then(result => {
//           setWeather(result);
//           setQuery('');
//           console.log(result);
//         });
//     }
//   }

//   const dateBuilder = (d) => {
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();

//     return `${day} ${date} ${month} ${year}`
//   }

//   return (
//     <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
//       <main>
//         <div className="search-box">
//           <input 
//             type="text"
//             className="search-bar"
//             placeholder="Search..."
//             onChange={e => setQuery(e.target.value)}
//             value={query}
//             onKeyPress={search}
//           />
//         </div>
//         {(typeof weather.main != "undefined") ? (
//         <div>
//           <div className="location-box">
//             <div className="location">{weather.name}, {weather.sys.country}</div>
//             <div className="date">{dateBuilder(new Date())}</div>
//           </div>
//           <div className="weather-box">
//             <div className="temp">
//               {Math.round(weather.main.temp)}°c
//             </div>
//             <div className="weather">{weather.weather[0].main}</div>
//           </div>
//         </div>
//         ) : ('')}
//       </main>
//     </div>
//   );
// }

// export default App;
 //<------------ 5th --------------->

// import React, { useState } from 'react';
// const api = {
//   key: "4f8e795dcd6dbf7b9f5276bff095ffc1",
//   base: "https://api.openweathermap.org/data/2.5/"
// }

// function App() {
//   const [query, setQuery] = useState('');
//   const [weather, setWeather] = useState({});

//   const search = evt => {
//     if (evt.key === "Enter") {
//       fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
//         .then(res => res.json())
//         .then(result => {
//           setWeather(result);
//           setQuery('');
//           console.log(result);
//         });
//     }
//   }

//   const dateBuilder = (d) => {
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();

//     return `${day} ${date} ${month} ${year}`
//   }

//   return (
//     <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
//       <main>
//         <div className="search-box">
//           <input 
//             type="text"
//             className="search-bar"
//             placeholder="Search..."
//             onChange={e => setQuery(e.target.value)}
//             value={query}
//             onKeyPress={search}
//           />
//         </div>
//         {(typeof weather.main != "undefined") ? (
//         <div>
//           <div className="location-box">
//             <div className="location">{weather.name}, {weather.sys.country}</div>
//             <div className="date">{dateBuilder(new Date())}</div>
//           </div>
//           <div className="weather-box">
//             <div className="temp">
//               {Math.round(weather.main.temp)}°c
//             </div>
//             <div className="weather">{weather.weather[0].main}</div>
//           </div>
//         </div>
//         ) : ('')}
//       </main>
//     </div>
//   );
// }
// export default App;

//<------------- 11th --------->
// import React from 'react';
// import About from './components/11th';
// function App() {
//   return (
//     <About />
//   );
// }

// export default App;
//<------------ 12th ---------->
// import React from 'react';
// import Home from './components/12th';
// function App() {
//   return (
//     <Home />
//   );
// }
// export default App;