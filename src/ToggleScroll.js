import { useRef, useState, useEffect } from 'react'

const ToggleScroll = ({ primaryImg, secondaryImg }) => {
  const [inView, setInView] = useState(false)
  const imageRef = useRef(null)

  // listen to scroll event when component mounts and run handling f-n
  // remove event listener when unmounted
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // check if current img is in window view
  const isInView = () => {
    const windowRect = imageRef.current.getBoundingClientRect()
    return windowRect.top >= 0 && windowRect.bottom <= window.innerHeight
  }

  // update inView state of each img
  const handleScroll = () => setInView(isInView())

  return (
    <img
      src={inView ? secondaryImg : primaryImg}
      ref={imageRef}
    />
  )
}

export default ToggleScroll