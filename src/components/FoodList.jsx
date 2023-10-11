import React from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import foodsJson from "./../foods.json";
import { useState } from "react";
import { Divider, Row, Card, Col, Button } from "antd";
import Search from "./Search";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [showForm, setShowForm] = useState(false);
  const [noFood, setNoFoods] = useState(false);

  const handleDeleteFood = (id) => {
    const newFoods = foods.filter((food) => food.id !== id);
    setFoods(newFoods);
    checkIfNoFood(newFoods);
  };

  const checkIfNoFood = (newFoods) => {
    if (!newFoods.length) {
      setNoFoods(!noFood);
    }
  };

  const handleAddFood = (newFood) => {
    const foodsCopy = [...foods];
    foodsCopy.unshift(newFood);
    setFoods(foodsCopy);
  };

  const handleSearchResult = (search) => {
    const foodsBackUp = [...foods];
    const searchMatches = foodsJson.filter(
      (food) => food.name.toUpperCase().indexOf(search.toUpperCase()) > -1
    );

    setFoods(searchMatches);
  };

  return (
    <>
      <h1>LAB | React IronNutrition</h1>

      <Divider className="foods-form">
        <Button className="show-form" onClick={() => setShowForm(!showForm)}>
          Add New Food
        </Button>
        {showForm && <AddFoodForm addFood={handleAddFood} />}
      </Divider>

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Search handleSearchResult={handleSearchResult} />
      </Row>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foods.map((food) => {
          return (
            <FoodBox
              key={food.id}
              food={food}
              handleDeleteFood={handleDeleteFood}
            />
          );
        })}{" "}
        {noFood && <p>OOP! There is no more content to show</p>}
      </Row>
    </>
  );
}

export default FoodList;
