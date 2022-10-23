import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Importing Sass
import './styles/index.scss';
import './styles/App.scss';

// Feature to scroll UI to top on click event
import ScrollToTop from './components/ScrollToTop';

// JS content files
import NotFound from './content/notFound.js';

// imported block components
import Footer from './components/footer';
import Header from './components/header';
import SideNav from './components/side-nav';

// import resources for markdown docs from ./src/content/markdown
// export classes from ./src/content/docsExport.js
// then add the appropriate Route below
import {
  Home,
  About,
  Warmups,
  Gamewarmups,
  Properthrowing,
  Throwingwarmups,
  Throwingprogression,
  Properhitting,
  Catchingdrills,
  Fieldingdrills,

  Practice002,
  Practice003,
  Practice004,
  Practice005,
  Practice006,
  Practice007,

  Game091622,

} from './content/docsExport';

function App() {
  return (
    <main className="main-wrapper">
      <Header />
      <div className="wrapper">
        <input id="menuCheckbox" type="checkbox" className="menuCheckbox util_displayHiddenVisually"></input>
        <label htmlFor="menuCheckbox" className="menuCheckbox--label">
          <img className="menuIcon" src="https://img.icons8.com/material/24/000000/menu--v1.png" alt="icon"></img>
          <img className="closeIcon" width="24" src="https://img.icons8.com/material/26/000000/multiply--v1.png" alt="icon"></img>
        </label>

        <Router>
          <ScrollToTop />
          <SideNav />
          <Switch>

            {/* Home */}
            <Route exact path='/' component={Home} />
            <Route exact path="/about"><About /></Route>
            <Route exact path="/gamewarmups"><Gamewarmups /></Route>
            <Route exact path="/properthrowing"><Properthrowing /></Route>
            <Route exact path="/throwingwarmups"><Throwingwarmups /></Route>
            <Route exact path="/throwingprogression"><Throwingprogression /></Route>
            <Route exact path="/properhitting"><Properhitting /></Route>
            <Route exact path="/catchingdrills"><Catchingdrills /></Route>
            <Route exact path="/fieldingdrills"><Fieldingdrills /></Route>


            {/* Blog */}
            <Route exact path="/blog/warmups"><Warmups /></Route>
            <Route exact path="/blog/practice002"><Practice002 /></Route>
            <Route exact path="/blog/practice003"><Practice003 /></Route>
            <Route exact path="/blog/practice004"><Practice004 /></Route>
            <Route exact path="/blog/practice005"><Practice005 /></Route>
            <Route exact path="/blog/practice006"><Practice006 /></Route>
            <Route exact path="/blog/practice007"><Practice007 /></Route>

            {/* Games */}
            <Route exact path="/blog/game091622"><Game091622 /></Route>

            {/* 404 */}
            <Route path="*"><NotFound /></Route>

          </Switch>
        </Router>
      </div>
      <Footer />
    </main>
  )
}

export default App;
