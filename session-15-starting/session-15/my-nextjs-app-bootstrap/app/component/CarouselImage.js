import React from "react";
import Image from "react-bootstrap/Image";

function CarouselImage({ text }) {
  // the encoding returns https://via.placeholder.com/800x400.png?text=First%20slide
  return (
    <Image
      src={`https://placehold.co/1250x500?text=${encodeURIComponent(text)}`}
      alt={text}
      fluid
    />
  );
}

export default CarouselImage;
