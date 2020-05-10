import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1><img className="tcup" src='images/t-cup.jpeg'/>T-Budgets</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
  </header>
);

export default Header;
