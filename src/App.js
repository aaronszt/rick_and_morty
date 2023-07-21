import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


const email = "aaron@gmail.com"
const password = "123asdd"

function App() {
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const characterFiltered = characters.filter(characters => characters.id !== Number(id))
      setCharacters(characterFiltered)
   }

   const login = (userData) => {
      if (userData.email === email && userData.password === password){
         setAccess(true)
         navigate("/home")
      }
   }

   useEffect(() => {
      !access && navigate("/")
   }, [access])

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

         </Routes>

      </div>
   );
}

export default App;
