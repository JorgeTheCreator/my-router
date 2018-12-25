import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const pageOne = () => {
  return <h1>PageONE</h1>;
};

const pageTwo = () => {
  return <h1>pageTWO</h1>;
};
const pageO = () => {
  return <h1>home</h1>;
};
const pageThree = () => {
  return <h1>Page Three</h1>;
};

const pageFour = () => {
  return <h1>Page Four</h1>;
};
const App = () => {
  return (
    <div>
      <ul>
        <li>
          {' '}
          <NavLink
            to="/"
            exact
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}
          >
            home
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink
            exact
            to="/pageone"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}
          >
            pageone
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/pagetwo"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}
          >
            pagetwo
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/pagethree"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}
          >
            pagethree
          </NavLink>
          <li>
            <NavLink
              exact
              to="/pagefour"
              activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}
            >
              pageFour
            </NavLink>
          </li>
        </li>
      </ul>

      <Route path="/" component={pageO} />
      <Route path="/pageone" exact component={pageOne} />
      <Route path="/pagetwo" exact component={pageTwo} />
      <Route path="/pagethree" exact component={pageThree} />
      <Route path="/pagefour" exact component={pageFour} />
    </div>
  );
};

export default App;
