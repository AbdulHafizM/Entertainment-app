import { useState } from "react";
import { useNavigate } from "react-router-dom";


const slideStyles = {
  width: "60%",
  height: "60%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  margin:'0 auto'
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
  color: '#fff'
};



const ImageSliderTv = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(https://www.themoviedb.org/t/p/w500${slides[currentIndex].poster_path})`
  };
  const navigate = useNavigate()

  return (<>
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div onClick={() => navigate(`/tvInfo/${slides[currentIndex].id}`)} style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
            <>
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
          </>
        ))}
      </div>
    </div>
    </>
  );
};

export default ImageSliderTv;


    //   <div>
    //     {
    //     movies.map((movie, index) =>(
    //                 <MovieCard key={index} movie={movie} />
    //             ))
    //         }
    //   </div>