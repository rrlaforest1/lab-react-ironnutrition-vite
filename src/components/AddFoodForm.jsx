import React from "react";
import { useState } from "react";
import "./AddFoodForm.css";
import { Divider, Input, Button, Row } from "antd";

function AddFoodForm({ addFood }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  const handleChange = (event) => {
    const key = event.target.id;
    let value;
    if (event.target.type === "number") {
      value = event.target.valueAsNumber;
    } else {
      value = event.target.value;
    }
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const name = formData.name;
    // const image = formData.image;
    // const calories = formData.calories;
    // const servings = formData.servings;

    // const states = { name, image, calories, servings };

    const oneFood = {
      ...formData,
      id: crypto.randomUUID(),
    };

    // const response = [];
    // for (const key in states) {
    //   if (!states[key] || states[key] === "default") {
    //     response.push(<p>Error on {key}</p>);
    //   }
    // }

    // if (response.length) {
    //   setMessage(response);
    //   setTimeout(() => {
    //     setMessage([]);
    //   }, 2000);
    //   return;
    // }

    addFood(oneFood);

    // resetInputs();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      <Row>
        <label htmlFor="name">Name:</label>
        <Input
          type="text"
          id="name"
          placeholder="pizza"
          value={formData.name}
          onChange={handleChange}
        />
      </Row>
      <Row>
        <label htmlFor="image">Image URL:</label>
        <Input
          type="text"
          id="image"
          placeholder="my/url/image.png"
          value={formData.image}
          onChange={handleChange}
        />
      </Row>
      <Row>
        <label htmlFor="calories">Calories (Kcal):</label>
        <Input
          type="number"
          id="calories"
          placeholder="100"
          value={formData.calories}
          onChange={handleChange}
        />
      </Row>
      <Row>
        <label htmlFor="servings">Serivings:</label>
        <Input
          type="number"
          id="servings"
          placeholder="2"
          value={formData.servings}
          onChange={handleChange}
        />
      </Row>
      <button style={{ marginTop: "1rem" }} type="submit">
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;
