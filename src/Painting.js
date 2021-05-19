import React, { useState } from "react";
import Toggle from './Toggle'

const Painting = props => {
// const [isHidden, setIsHidden] = useState(false)


  // if (isHidden) {
  //   return (
  //   <h1>Painting has been stolen!</h1>
  //   )
  // }
  // else {

  // const savePainting = () => {
  //   console.log('Painting was saved!')
  // }
      return (
        <div>
          <img src={props.painting.image} />
          <h4>
            "{props.painting.title}" by {props.painting.artist.name}
          </h4>
          <p>Year: {props.painting.date}</p>
          <p>
            Dimensions: {props.painting.dimensions.width} in. x {props.painting.dimensions.height} in.
          </p>
        <Toggle type="add"/>
        <Toggle type="hearts" toggledOn="❤" toggledOff="♡"/>
        </div>

      
        );
  }
// };

export default Painting;
