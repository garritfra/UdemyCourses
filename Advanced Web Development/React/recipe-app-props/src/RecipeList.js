import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

export default class RecipeList extends Component {
static propTypes = {
  recipes: PropTypes.arrayOf(Recipe).isRequired
}

  render() {
    return(
      <div className="recipe-list">
        <Recipe
          title="Pasta"
          ingredients={['flour', 'water']}
          instructions="Mix ingredients"
          img="spaghetti.jpg"
          />

        <Recipe
          title="Bread"
          ingredients={["flour", "eggs", "milk"]}
          instructions="Mix ingredients and nead until soft"
          img="bread.jpg"
          />

        <Recipe
          title="Icecream"
          ingredients={["Milk", "Water", "Ice"]}
          instructions="Mix ingredients and freeze"
          img="icecream.png"
          />
      </div>
    )
  }
}