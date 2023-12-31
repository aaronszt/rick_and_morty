import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import cardStyle from "../Card/Card.module.css"

function Card ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}){
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }
      else {
         setIsFav(true)
         addFav({id, name, status, species, gender, origin, image})
      }
   }

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return(
      <div className = {cardStyle.cardContainer}>

            <Link to={`/detail/${id}`}>
               <h2>{name}</h2>
            </Link>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{status}</h2>
            <h2>{origin}</h2>
            <img src={image} alt={name} />
            <div className = {cardStyle.cardFooter}>
               <button className = {cardStyle.favoriteButton} onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
               <button onClick={()=>onClose(id)}>x</button>
            </div>
      </div>
   )
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) =>  {
   return {
      addFav: (character) => { dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);