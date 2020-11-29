import React, { useState } from 'react'
import "./Movie.css"
import movieImage from '../Assets/Images/movies.jpeg'
export default function Movie({movie ,onAddLike, onDelete ,onAddDislike }){

        const [verifLike, setVerifLike] = useState(true)
        const [verifDislike, setVerifDislike] = useState(true)

        const handleAddLikeMovie = (movie) => {
            if(verifLike == true){
                onAddLike(movie);
                setVerifLike(false);
            }
            
        }

        const handleAddDislikeMovie = (movie) =>{
            if(verifDislike == true){
                onAddDislike(movie);
                setVerifDislike(false);
            }
        }
    
        return (
              <div class="column card is-3 card-movie">
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <img src = {movieImage} />
                            <p class="title is-4 titleMovie has-text-centered">{movie.title}</p>
                            <p class="has-text-centered category"><b >Category:</b> {movie.category}</p>
                            <span class="icon has-text-danger iconDelete" onClick={() => onDelete(movie)}><i class="fas fa-trash"></i></span>
                                <span class="icon has-text-info iconLike" onClick={() => handleAddLikeMovie(movie)}>
                                    <i className="fas fa-heart"></i>
                                </span>
                            <span class="tag is-black iconNbLike" >{movie.likes}</span>
                                <span class="icon has-text-info iconDislike" onClick={() => handleAddDislikeMovie(movie)}>
                                    <i class="fas fa-heart-broken"></i>
                                </span>
                            <span class="tag is-black iconNbDislike">{movie.dislikes}</span>
                        </div>
                    </div>
                    <div class="content">
                        
                    </div>
                </div>
            </div>  
            
        )
    
}
