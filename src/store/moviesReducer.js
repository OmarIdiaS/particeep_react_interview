const films = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    },
  ]


export const DELETE_MOVIE = 'DELETE_MOVIE';
export const ADD_LIKE_MOVIE =  'ADD_LIKE_MOVIE'
export const ADD_DISLIKE_MOVIE = 'ADD_DISLIKE_MOVIE'
export const UPDATE_FILTER = 'UPDATE_FILTER'


export function moviesReducer(state = films, action){
    switch(action.type){
        case ADD_LIKE_MOVIE: 
            return state.map(movie =>{
                (movie.id === action.payload) ? (movie.likes = movie.likes + 1) : (<></>)
              return movie
            }
            )
        case ADD_DISLIKE_MOVIE:
            return state.map(movie =>{
              (movie.id === action.payload) ? (movie.dislikes = movie.dislikes + 1) : (<></>)
              return movie
            }
            )

        case DELETE_MOVIE:
            return state.filter(movie => movie.id !== action.payload)
        default: 
            return state
    }
}


export function filterReducer(state = null , action){
  switch(action.type){
      case UPDATE_FILTER : 
          return action.payload;
      default : 
          return state; 
  }
}
