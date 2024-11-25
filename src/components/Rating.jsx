import React from 'react'
import {v4 as uuidv4} from "uuid"

export default function Rating({value, color}) {
  return (
    <div>
      {[1,2,3,4,5].map((rate)=>(
        <span key={uuidv4()}>
            <i 
            style={{color}}
            className={
                value + 1 === rate + 0.5? "fas fa-star-half-at":value >= rate? "fas fa-star": "far fa-star"
                
            }
            ></i>

        </span>
      ))}
    </div>
  )
};
Rating.defaultProps = {
    color:"#FFA41C",
}
