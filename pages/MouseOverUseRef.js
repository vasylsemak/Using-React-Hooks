import React from 'react'
import ToggleMouseOver from '../src/ToggleMouseOver'

const MouseoverUseRef = () => {

  return (
    <>
      <ToggleMouseOver
        primaryImg='/static/speakers/bw/Speaker-6548.jpg'
        secondaryImg='/static/speakers/Speaker-6548.jpg'
      />
      <ToggleMouseOver
        primaryImg='/static/speakers/bw/Speaker-41808.jpg'
        secondaryImg='/static/speakers/Speaker-41808.jpg'
      />
    </>
  )
}

export default MouseoverUseRef