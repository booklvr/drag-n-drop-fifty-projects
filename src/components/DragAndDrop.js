import React, { Fragment } from 'react'

const DragAndDrop = () => {
  return (
    <Fragment>
      <div class='empty'>
        <div class='fill' draggable='true'></div>
      </div>
      <div class='empty'></div>
      <div class='empty'></div>
      <div class='empty'></div>
      <div class='empty'></div>
    </Fragment>
  )
}

export default DragAndDrop
