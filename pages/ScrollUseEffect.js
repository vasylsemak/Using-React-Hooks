import React from 'react'
import ToggleScroll from '../src/ToggleScroll'
import ToggleScrollClass from '../src/ToggleScrollClass'

const speakersArr = [187, 823, 1124, 1269, 1530, 1725, 5996, 6548, 8367, 8590, 10803, 10808, 18805, 41808]

const ScrollUseEffect = () => {

  return (
    <>
      {speakersArr.map(speakerId => (
        <div key={speakerId}>
          <ToggleScroll
            primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
            secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
            alt='speaker'
          />
        </div>
      ))}
    </>
  )
}

export default ScrollUseEffect