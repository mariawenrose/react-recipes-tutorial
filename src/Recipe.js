import React from 'react'

const Recipe = ({ label, calories, image, ingredients }) => {
  return (
    <div>
      <h1>{label}</h1>
      <p>Calories: {calories}</p>
      <img src={image} alt=''></img>
      {ingredients.map(ingredients => (
        <li>{ingredients.text}</li>))}
    </div>
  )
}

export default Recipe