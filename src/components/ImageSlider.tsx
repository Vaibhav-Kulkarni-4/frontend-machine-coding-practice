import { useState, useEffect } from "react";
import { images } from "../constants/constants";

function ImageSlider() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function handlePreviousClick() {
    if (activeImageIndex === 0) {
      setActiveImageIndex(images.length - 1);
    } else {
      setActiveImageIndex(activeImageIndex - 1);
    }
  }

  function handleNextClick() {
    setActiveImageIndex((activeImageIndex + 1) % images.length);
  }

  // Whenever component renders, after rendering, useEffect is called.
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      handleNextClick();
    }, 2000);
    // This returns runs whenever a component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImageIndex]);
  // Dependency array - whatever code is present in useEffect, it's dependent on a variable/state. In this case, this code is dependent on activeImageIndex. What this means is - whenever activeImageIndex changes, the component re-renders.

  return (
    <>
      <h2 className="mt-10 flex justify-center items-center text-xl font-bold">
        Image Slider
      </h2>
      <div className="mt-8 flex justify-center items-center">
        <button className="font-bold p-4 m-10" onClick={handlePreviousClick}>
          Previous
        </button>
        {images.map((image_url, idx) => (
          <img
            key={image_url} // key = uniquely identify the img tag (if there are 5 siblings of images, so to uniquely identify the image tag, react needs an identifier. that is a key)
            alt={`Carousel_Image_${activeImageIndex}`}
            src={image_url}
            className={
              "w-92 h-52 object-contain " +
              (activeImageIndex === idx ? "block" : "hidden")
            }
          ></img>
        ))}

        <button className="font-bold p-4 m-10" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </>
  );
}

export default ImageSlider;
// a default export is a way to share a single value, function, or class as the main thing from a file with other parts of your code. This means that when you import from that file in another part of your code, you don't need to use curly braces {} around the import statement.
