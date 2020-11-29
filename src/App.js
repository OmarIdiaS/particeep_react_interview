import logo from './logo.svg';
import Home from './Components/Home.js'
import './App.css';
import {Provider} from "react-redux"
import store from './store';
import {ShowMoviesStore}  from './Components/Home'



function App() {
  return (
  <Provider store={store}>
      <ShowMoviesStore />
  </Provider>
  );
}

export default App;
