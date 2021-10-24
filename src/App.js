import './App.css';
import Header from './Components/Header/Header';
import SliderImages from './Components/SliderImages';
import CardSlider from './Components/CardSlider';
import Premieres from './Components/Premieres';
import Footer from './Components/Footer';
// import AllMovies from './components/AllMovies';
import AllMoviesFetch from './Components/AllMoviesFetch';
import SingleMovie from './Components/SingleMovie';
//import SingleFetch from './Components/SingleFetch';
import Registration from './Components/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
          <Switch>
            <Route exact path="/">
              <SliderImages/>
              <CardSlider/>
              <Premieres/>
            </Route>
            <Route exact path="/movies">
              <AllMoviesFetch />
            </Route>
            <Route exact path="/movies/:movid">
              <SingleMovie/>
            </Route>
            <Route exact path="/register">
              <Registration/>
            </Route>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
