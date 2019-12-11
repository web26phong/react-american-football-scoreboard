import React from "react";

const NewBottomRow = props => {
    return (
      <div className="buttons">
        <div className="downButtons">
            <button onClick={ () => props.aFunc(1) } className="1st-down">1st Down</button>
            <button onClick={ () => props.aFunc(2) } className="2nd-down">2nd Down</button>
            <button onClick={ () => props.aFunc(3) } className="3rd-down">3rd Down</button>
            <button onClick={ () => props.aFunc(4) } className="4th-down">4th Down</button>
        </div>
      </div>
    );
  };
  
  export default NewBottomRow;