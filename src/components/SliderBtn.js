import React from 'react';


const SliderBtn = ({ className, img, alt, previous, next }) => {
    return (
        <div className={className} onClick={className === "sliderSection__prev-button" ? previous : next}  >
            <img
                className={className === "sliderSection__prev-button" ? "sliderSection__prev-button-image" : "sliderSection__next-button-image"}
                src={img}
                alt={alt}
            />
        </div>

    );
}

export default SliderBtn;