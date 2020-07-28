import React, { Component } from "react";
class Category extends Component {
  state = {};
  render() {
    return (
      <div className="categorycontainer ac">
        <div className="imagecategory">
          <img src="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=343&q=80" />
          <div className="categoryname">
            <p>Gym</p>
          </div>
        </div>

        <div className="imagecategory">
          <img src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" />
          <div className="categoryname">
            <p>Yoga</p>
          </div>
        </div>

        <div className="imagecategory">
          <img src="https://images.unsplash.com/photo-1574953056887-b1970bdd4506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80" />
          <div className="categoryname">
            <p>Mind</p>
          </div>
        </div>
        <div className="imagecategory">
          <img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80" />
          <div className="categoryname">
            <p>Nutrition</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
