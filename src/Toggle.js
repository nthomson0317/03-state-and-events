import React, { useState } from 'react'

let Toggle = (props) => {
    let [isToggleOn, setIsToggleOn] = useState(false)


        let handleClick = () => {
            setIsToggleOn(isToggleOn = !isToggleOn)
        } 
    
        if (props.type == 'hearts'){
        return (
           
            <button onClick={handleClick}>
                {isToggleOn ? props.toggledOn: props.toggledOff}
            </button>
            )
        } 
        else {
            return (
            <button onClick={handleClick}>
            {isToggleOn ?  'Remove from Cart': 'Add to Cart' }
        </button>
    )
        }

}

export default Toggle