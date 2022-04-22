import React from 'react'
// import ToggleMouseOver from '../src/ToggleMouseOver'
import ToggleMouseOverClass from '../src/ToggleMouseOverClass'

const MouseoverUseRef = () => {
  return (
    <>
      <ToggleMouseOverClass
        primaryImg='/static/speakers/bw/Speaker-6548.jpg'
        secondaryImg='/static/speakers/Speaker-6548.jpg'
      />
      <ToggleMouseOverClass
        primaryImg='/static/speakers/bw/Speaker-41808.jpg'
        secondaryImg='/static/speakers/Speaker-41808.jpg'
      />
    </>
  )
}

export default MouseoverUseRef