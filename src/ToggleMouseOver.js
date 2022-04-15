import { useRef } from 'react'

const ToggleMouseOver = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null)

  return (
    <img
      src={primaryImg}
      ref={imageRef}
      onMouseOver={() => imageRef.current.src = secondaryImg}
      onMouseOut={() => imageRef.current.src = primaryImg}
      alt='speaker'
    />
  )
}

export default ToggleMouseOver