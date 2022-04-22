import { useRef, useState, useEffect } from 'react'

const ToggleScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // check if current img is in window view
  const isInView = () => {
    const windowRect = imageRef.current.getBoundingClientRect()
    return windowRect.top >= 0 && windowRect.bottom <= window.innerHeight
  }

  // update inView state of each img
  const handleScroll = () => setInView(isInView())

  useEffect(() => {
    setIsLoading(false)
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
      src={
        isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
        : inView ? secondaryImg
        : primaryImg
      }
      ref={imageRef}
      height='340'
    />
  )
}

export default ToggleScroll