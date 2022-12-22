import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Fragment } from "react";
import Home from "../pages/Home";
import Todo from '../pages/Todo';
import About from '../pages/About';
import WhyDig from "../pages/WhyDig";
import Guide from "../pages/Guide";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
}

function RoutesApp() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/todo' element={<Todo />} />
            <Route path='/about' element={<About />} />
            <Route path='/whyDig' element={<WhyDig />} />
            <Route path='/guide' element={<Guide />} />
            <Route path='/signin' element={<Signin/>} />
            <Route path='/signup' element={<Signup/>} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp;

