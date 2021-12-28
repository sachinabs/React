import { HashRouter, Route,Link } from "react-router-dom";
import "./App.css";

import Home from "../../components/home/home";
import Card from '../../components/card/card';
import Thumbnails from '../../components/thumbnail/thumbnail'

function App() {
  return(<div classname="App">
  <Home/>
</div>)
}

export default App;
