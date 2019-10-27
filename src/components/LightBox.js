import React from 'react';


const LigtBox = ({ image, close, tags }) => {
    return (<div className="light-box">
        <div className="light-box__wrapper">
            <img className="light-box__img" src={image} alt={tags} />
            <span className="light-box__close" onClick={close}>&#x2715;</span>
        </div>
    </div>
    );
}

export default LigtBox;