import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import "./RecipeApp.css"
import Navbar from './Navbar';

export default class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList />
      </div>
    );
  }
}