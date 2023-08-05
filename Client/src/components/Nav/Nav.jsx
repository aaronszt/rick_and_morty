import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
    return(
        <div>
            
            <SearchBar onSearch = {onSearch}/>
            <button>
                <Link to = "/about">ABOUT</Link>
            </button>
            <button>
                <Link to = "/home">Home</Link>
            </button>
            <button>
                <Link to = "/favorites">Favorites</Link>
            </button>

        </div>
    )
}

export default Nav;