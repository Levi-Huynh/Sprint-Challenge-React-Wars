import React, { Component } from 'react';


function Image1(props) {
return (
    <div className= "CharImage">
        <img src={props.img.url} alt={props.img.alt}></img>
    </div>
)

}

export default Image1;