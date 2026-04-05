import React from "react";
import StyledComponent from "./components/StyledComponent";
import Gallery from "./components/Gallery";
import LikeDislikeButton from "./components/LikeDislikeButton";
// import FormComponent from "./components/FormComponent";

const App = () => {
  return (
    <div>
      <StyledComponent />
      <Gallery />
      <LikeDislikeButton />
      {/* <FormComponent /> */}
    </div>
  );
};

export default App;
