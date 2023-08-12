import { useState } from "react";


const SearchBar = ({ onSearch }) => {
   
   const [id, setId] = useState("");
   
   const handleChange = (event) => {
      setId(event.target.value) 
   }

   const enter = (event) => {

      if(event.keyCode === 13){
         event.target.value = ""
      }
    }
   
   return (
      <div>
          <input type='search' onChange={handleChange} value = {id}/>
          <button onClick={() => {onSearch(id); setId("")}}>Agregar</button> 
      </div>
   );
}

export default SearchBar;

// import { useState } from "react";

// import styles from "./SearchBar.module.css";


// export default function SearchBar(props) {
//    const { onSearch } = props
//    const [id, setId ] = useState('')


//    const handleChange = (event) => {
//       setId(event.target.value)
//    }

//    const handleSearch = ()=>{
//       onSearch(id);
//    }

//    const enter = (event) => {

//       if(event.keyCode === 13){
//          handleSearch();
//          event.target.value = ""
//       }
//     }

//    return (


//          <div className={styles.inputAndBtn} >
//             <input 
//             className={styles.input}
//             type='text' 
//             placeholder="Search character..." 

//             onChange= {handleChange}
//             onKeyDown={enter}
//             // relacionamos el estado local

//             />
//             <button className={styles.btn} 

//             onClick={handleSearch }>
//                +
//             </button>
//          </div>

//    );
// }