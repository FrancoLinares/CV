import React from "react";
import Carousel from "react-material-ui-carousel";
import classes from "../../assets/styles/carousel.css";

function CarouselComponent({ images }) {
  return (
    <Carousel>
      {images.map((image, i) => (
        <Item key={i} url={image} />
      ))}
    </Carousel>
  );
}

function Item({ url }) {
  return (
    <div>
      <img className={classes.dialogCarousel} src={url} />
    </div>
  );
}
export default CarouselComponent;
