import React from "react";
import data from "../../json/data.json";
import DisplayCrafting from "../Crafting/Crafting";
import "./Recipe.css";

const { toolsRecipe, eggFoods, spicesRecipe } = data;

function Recipe() {
  return (
    <div>
      <div className="container-fluid py-5 bg-light mb-4">
        <h1 className="display-5 fw-bold text-center">Crafting Recipes</h1>
      </div>
      <div className="container">
        <div className="row justify-content-md-center mb-3">
          <div className="col-10" style={{ fontFamily: "'PT Sans', sans-serif" }}>
            <h5>Attention!</h5>
            <h6>
              Items must be placed according to the picture, if you put them randomly, you will not
              be able to make the item
            </h6>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-md-center">
          <h1 className="text-center" style={{ fontFamily: "'PT Sans', sans-serif" }}>
            Cooking Table
          </h1>
        </div>
        <div className="row">
          <div className="col">
            <div className="cooking-table justify-content-center" style={{ width: "100%" }}>
              <DisplayCrafting isFor="cooking-table" />
            </div>
          </div>

          <div className="row justify-content-center" id="sub-title-breakpoint">
            <p
              className="col text-center"
              style={{ color: "#666666", fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              the cooking table is used to make egg food, all food and spices are also made from the
              cooking table. But you also can't make the food on the crafting table. crafting table
              is used to make cooking utensils such as skillet, saucepan, etc.
            </p>
          </div>

          <hr />

          <div className="container" style={{ marginTop: "100px" }}>
            <div className="row justify-content-md-center">
              <div className="col-md-6" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                <h1 className="text-center">Tools</h1>
                <h4 className="text-center">(Use a crafting table, not a cooking table)</h4>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row tools-recipes" style={{ marginBottom: "100px" }}>
              <DisplayCrafting isFor="other" useData={toolsRecipe} />
            </div>
          </div>

          <hr />

          <div className="container" style={{ marginTop: "100px" }}>
            <div className="row justify-content-md-center">
              <div className="col-md-6" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                <h1 className="text-center">Ingredients and Spices</h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row ingredients-recipes" style={{ marginBottom: "100px" }}>
              <DisplayCrafting isFor="other" useData={spicesRecipe} />
            </div>
          </div>

          <hr />

          <div className="container" style={{ marginTop: "100px" }}>
            <div className="row justify-content-md-center">
              <div className="col-md-6" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                <h1 className="text-center">Foods</h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row foods-recipes" style={{ marginBottom: "100px" }}>
              <DisplayCrafting isFor="other" useData={eggFoods} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
