import React from 'react'
import style from './recipe.module.css'

const Recipe = ({ label, calories, image, ingredients }) => {
  return (
    <div className = {style.recipe}>
      <h1>{label}</h1>
      <p>Calories: {Math.floor(calories)}</p>
      <img className = {style.image} src={image} alt=''></img>
      <ol>
        {ingredients.map(ingredients => (
          <li>{ingredients.text}</li>))}
      </ol>
    </div>
  )
}

export default Recipe