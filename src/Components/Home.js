import React, { useCallback, useState} from "react"
import Movie from "./Movie"
import {useDispatch, useSelector} from "react-redux"
import { filtredAllCatagories } from "../store/movieSelectors";
import { addDislikeMovie, addLikeMovie, deleteMovie} from "../store/movieActions";
import { CategoryFilter } from "./Category";


export default function Home({movies, onAddLike, onAddDislike, onDelete }) {

        const [firstMovies, setFirstMovies] = useState(0);
        const [numberOfMovies, setNumberOfMovies] = useState(movies.length); 
        const [numberNextMove, setNumberNextMove] = useState(movies.length);
        const [choiceNumberOfMovies] = useState([4,8,12])

        const [AllMovies] = useState(movies)

        const handleChangeNumberOfMovies = (num) => {
            setNumberOfMovies(num)
            setNumberNextMove(num)
            setFirstMovies(0)
        }

        const handleNextPage = () => {
            if(movies.length > firstMovies + numberOfMovies ){
                setFirstMovies(firstMovies + numberOfMovies)
                setNumberNextMove(numberNextMove + numberOfMovies)
            }
        }

        const handlePreviousPage = () => {
            if(firstMovies > 0){
                setFirstMovies(firstMovies - numberOfMovies)
                setNumberNextMove(numberNextMove - numberOfMovies)
            }
        }

        
        return(
            <section class="hero is-success is-fullheight">
                <div class="navbar">
                    {movies.length !== 0 ? (<>
                        <div class="dropdown is-hoverable">
                            <div class="dropdown-trigger">
                                <button class="button tag is-info is-large" aria-haspopup="true" aria-controls="dropdown-menu4">
                                    <span>Filter</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>

                            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                                <div class="dropdown-content">
                                   <CategoryFilter  categories = {AllMovies} /> 
                                </div>
                            </div>
                        </div>
                                    
                        <div class="dropdown is-hoverable nbCards">
                        <div class="dropdown-trigger">
                                <button class="button tag is-info is-large" aria-haspopup="true" aria-controls="dropdown-menu3">
                                    <span>Show more cards</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                                <div class="dropdown-content">
                                    {
                                        choiceNumberOfMovies.map(number => {
                                            return(<a class="tag is-info is-large c" onClick={() => handleChangeNumberOfMovies(number)}>{number} Cards</a>)
                                        })
                                    }
                                </div>
                                </div>
                        </div>
                        </>
                    ) : (<></>)}
                        
                </div>
                    <div class="columns  is-gapless  is-multiline ">   
                        {
                            movies.slice(firstMovies,numberNextMove).map(
                                movie => { return <Movie movie = {movie} key={movie.id} onAddLike={onAddLike} onAddDislike={onAddDislike} onDelete={onDelete} /> }
                            )
                    }           
                    </div>
                    <div class="footer">
                        <nav class="pagination columns is-vcentered" role="navigation" aria-label="pagination">
                            <a class="pagination-previous column is-6 nextPage" disabled={firstMovies=== 0} onClick={() => handlePreviousPage()}>Previous</a>    
                            <a class="pagination-next column nextPage" disabled={numberNextMove >= movies.length} onClick={() => handleNextPage()}>Next page</a>
                        </nav>
                </div>
        </section>
        
        )
}

export  function ShowMoviesStore(){
    
    const movies = useSelector(filtredAllCatagories)
    
    const dispatch = useDispatch()
    
    const onAddLike  = useCallback(movie =>dispatch(addLikeMovie(movie)))
    
    const onAddDislike = useCallback(movie =>dispatch(addDislikeMovie(movie)))
    
    const onDelete = useCallback(movie =>{dispatch(deleteMovie(movie))})


    return (<>
        <Home movies ={movies} onAddLike = {onAddLike} onAddDislike={onAddDislike}  onDelete={onDelete}  />
    </>
    )
}

