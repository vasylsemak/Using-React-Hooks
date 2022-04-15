import React from 'react'
import ToggleMouseOver from '../src/ToggleMouseOver'

const MouseoverUseRef = () => {

  return (
    <>
      <ToggleMouseOver 
        primaryImg='/static/speakers/bw/Speaker-187.jpg'
        secondaryImg='/static/speakers/Speaker-187.jpg'
      />
      <ToggleMouseOver 
        primaryImg='/static/speakers/bw/Speaker-10803.jpg'
        secondaryImg='/static/speakers/Speaker-10803.jpg'
      />
    </>
  )
}

export default MouseoverUseRef