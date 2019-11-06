import React from 'react'

const Side = (props) => {
  console.log("props", props)
  return (
    <div>
      { props.sides.join(", ") }
    </div>
  )
}

export default Side
