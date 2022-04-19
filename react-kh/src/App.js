import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {IndexPage} from "./pages/IndexPage";
import {AboutPage} from "./pages/AboutPage";
import {NavBar} from "./components/layout/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Блок определения констант
 */
const NAV_LINKS = [
  {to: '/', title: 'Главная', id: 'navlink_0'},
  {to: '/about', title: 'Обо мне', id: 'navlink_1'},
];

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar navlinks={NAV_LINKS}/>
        <Routes>
          <Route path="/" element={<IndexPage/>} exact/>
          <Route path="/about" element={<AboutPage/>} exact/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;