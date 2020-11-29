export const movieSelector = ({movies}) => movies

export const filterSelector = ({filter}) => filter


export const filtredAllCatagories = ({movies , filter}) => {
    if(filter === null){
        return movies
    }

    return movies.filter(movie => movie.category === filter)
}