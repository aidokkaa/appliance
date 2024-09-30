import logo from './logo.svg';
import './App.css';
import { FlickityOne } from './components/reviews/Reviews';
import Mainpg from './components/main/Mainpg';
import Header from './components/header/Header';
import Reviews from './components/reviews/Reviews'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Mainpg/>
    </div>
  );
}

export default App;
