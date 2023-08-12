import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import axios from 'axios';
import backGraund from "./image/backGraund.jpg";
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


// const email = "aaron@gmail.com"
// const password = "123asdd"
const URL = 'http://localhost:3001/rickandmorty/login/';




function App() {
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()

   const onSearch = async (id) => {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         
         if (data.name){
            setCharacters((oldChars) => [...oldChars, data])
         };

      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   };

   // const handleRandom = () => {
   //    const random = Math.floor(Math.random() * (626 - 1) + 1);
   //    onSearch(random)
   //  }

   const onClose = (id) => {
      const characterFiltered = characters.filter(characters => characters.id !== id)
      setCharacters(characterFiltered)
   }

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate('/home');
         
      } catch (error) {
         console.log(error.message);
      }
   }

   useEffect(() => {
      !access && navigate("/")
   }, [access])

   const backgroundStyles = {
      backgroundImage: `url(${backGraund})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '150vh', // Establece el alto de la página al 100% del viewport
    };
   
   return (
      
      <div className='App'>
         {
            location.pathname !== "/" && <Nav onSearch = {onSearch}/>
         }
         

         <Routes>

            <Route path='/home' element = {<Cards characters={characters} onClose={onClose}/>}/>

            <Route path='/about' element = {<About/>}/>

            <Route path='/detail/:id' element = {<Detail/>}/>

            <Route path='/' element = {<Form login = {login}/>}/>

            <Route path='/favorites' element = {<Favorites/>}/>

         </Routes>
      </div>
   );
}

export default App;
