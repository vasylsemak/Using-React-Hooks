import { Component, createRef } from 'react'

export default class ToggleScrollClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inView: false
    }
    this.imageRef = createRef()
    this.isInView = this.isInView.bind(this)
    this.scrollHandler = this.scrollHandler.bind(this)
  }

  isInView() {
    const rect = this.imageRef.current.getBoundingClientRect()
    return rect.top >= 0 && rect.bottom <= window.innerHeight
  }

  scrollHandler() {
    this.setState({
      inView: this.isInView()
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler)
    this.setState({
      inView: this.isInView(),
    })
  }

  render() {
    const { primaryImg, secondaryImg } = this.props

    return (
      <img
        src={ this.state.inView ? secondaryImg : primaryImg }
        ref={this.imageRef}
        height='340'
      />
    )
  }
}
