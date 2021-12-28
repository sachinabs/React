import { Route, Routes, BrowserRouter  } from "react-router-dom";

import Card from "../card/card";
import Thumbnails from "../thumbnail/thumbnail";
import Home from "../home/home";

const Navbar = () => {
  return (


        <Routes>

        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/card" exact>
          <Card />
        </Route>
        <Route path="/thumbnails" exact>
          <Thumbnails />
        </Route>
        </Routes>


  );
};

export default Navbar;
