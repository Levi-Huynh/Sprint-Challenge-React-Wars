import React, { Component } from 'react';


function Card(props) {

    return (
        <div className="char-card">
          <div className="char-info">
            <h3>{props.char.name}</h3>
            <p>
              <strong>Height:</strong> {props.char.height}
            </p>
            <p>
              <strong>Hair Color:</strong> {props.char.hair_color}
            </p>
            <p>
              <strong>Skin Color:</strong> {props.char.skin_color}
            </p>
            <p>
              <strong>Birth Year:</strong> {props.char.birth_year}
            </p>
          </div>
        </div>
      );
}

export default Card;