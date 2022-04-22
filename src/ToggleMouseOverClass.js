import { Component, createRef } from 'react'

class ToggleMouseOverClass extends Component {
  render() {
    const imageRef = createRef()
    const { primaryImg, secondaryImg } = this.props

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
}

export default ToggleMouseOverClass
