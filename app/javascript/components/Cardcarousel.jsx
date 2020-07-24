import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "./Cardobj";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
  render() {
    return (
      <div>
        <h5 className="headslide">{this.props.title}</h5>
        <div className="line"></div>
        <Carousel
          className="line2"
          responsive={responsive}
          swipeable={true}
          centerMode={true}
        >
          {this.props.swipelist.map((list1, index) => (
            <Link key={index} to={"../course/index/" + list1.course.uin}>
              <div key={index}>
                <Card
                  key={index}
                  link={list1.course.thumbnailPath}
                  title={list1.course.name}
                ></Card>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Cardcarousel;
