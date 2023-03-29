import { MovieContext } from "./MovieListContext";
import { useContext } from "react";
import AddMovie from './AddMovie'

const Nav=({name,price})=>{
    const [movies,setMovies]=useContext(MovieContext)
    return(
        <div style={{color:"red",display:"flex",justifyContent:"space-around"}}>
            <h1>Muhammad Izaan</h1>
            <AddMovie/>
            <h1>List of movies {movies.length}</h1>
        </div>
    )
    }
    
    export default Nav;