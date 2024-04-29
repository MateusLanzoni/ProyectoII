import React from 'react'

export const Abueno = () => {
    function checkCondition() {
        // Your logic here
        return false; // or false based on your condition
    }
    let content;
    if (checkCondition()) {
        content = <div>Show this when the function returns true</div>;
      } else {
        content = <div>Show this when the function returns false</div>;
      }
    return (
    <div>
        {content}
   
    </div>
  )
}
