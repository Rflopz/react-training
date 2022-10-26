import React from 'react'
import "./Card.styles.css"

const Card = ({ children, ...props }) => {

  function buildStyle () {
    return {
      width: props.width,
      border: props.border,
      borderColor: props.borderColor,
    }
  }

  return (
    <div className="card" style={buildStyle()}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  border: "1px solid",
  borderColor: "white"
}

export default Card