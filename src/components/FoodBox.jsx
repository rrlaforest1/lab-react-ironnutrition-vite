import React from "react";
import "./FoodBox.css";
import { Card, Col, Button } from "antd";

function FoodBox({ food, handleDeleteFood }) {
  //   const { id, name, calories, image, servings, handleDeleteFood } = food;

  return (
    <>
      <Col>
        <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
          <img height={60} src={food.image} />

          <p>Calories: {food.calories}</p>
          <p>Servings {food.servings}</p>

          <p>
            <b>Total Calories: {food.servings * food.calories}</b> Kcal
          </p>

          <Button onClick={() => handleDeleteFood(food.id)}>Delete</Button>
        </Card>
      </Col>
    </>
  );
}

export default FoodBox; // Your code here
