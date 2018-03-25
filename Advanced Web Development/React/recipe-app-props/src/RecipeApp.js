import React, { Component } from 'react';
import Recipe from './Recipe';

export default class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe
          title="pasta"
          ingredients={['flour', 'water']}
          instructions="Mix ingredients"
          img="spaghetti.jpg"
          />
      </div>
    );
  }
}