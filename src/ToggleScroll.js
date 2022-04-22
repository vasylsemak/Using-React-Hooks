import { useRef, useState, useEffect } from 'react'

const ToggleScroll = ({ primaryImg, secondaryImg }) => {
  const [inView, setInView] = useState(false)
  const imageRef = useRef(null)

  // check if current img is in window view
  const isInView = () => {
    const windowRect = imageRef.current.getBoundingClientRect()
    return windowRect.top >= 0 && windowRect.bottom <= window.innerHeight
  }

  // update inView state of each img
  const handleScroll = () => setInView(isInView())

  useEffect(() => {
    // set images in view colored before scrolling
    setInView(isInView())
    // listen to scroll event when component mounts and run handling f-n
    window.addEventListener('scroll', handleScroll)
    // remove event listener when unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll)
      setIsLoading(true)
    }
  }, [])

  return (
    <img
      src={inView ? secondaryImg : primaryImg}
      ref={imageRef}
      height='340'
    />
  )
}

export default ToggleScroll