import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "./Cardobj";
import Carousel from "react-multi-carousel";
import "./rrm.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

class Cardcarousel extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e, e1) {
    e1.preventDefault();
    window.location = "../../course/index/" + e;
  }
  handleCarousel() {
    $(".owl").flickity({
      cellAlign: "left",
      contain: true,
      draggable: true,
      groupCells: 2,
      pageDots: false,
      freeScroll: true,
    });
  }
  render() {
    return (
      <div>
        <Carousel
          className="line2"
          responsive={responsive}
          swipeable={true}
          centerMode={true}
        >
          {this.props.swipelist.map((list1, index) => (
            <div key={index} className="cccarousel">
              <a onClick={(e) => this.handleClick(list1.course.uin, e)}>
                <Card
                  key={index}
                  link={list1.course.thumbnailPath}
                  title={list1.course.name}
                ></Card>
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Cardcarousel;
