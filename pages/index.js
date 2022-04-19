import { useState } from 'react'
import MouseOverUseRef from './MouseOverUseRef'

const InputElement = () => {
  const [ inputText, setInputText ] = useState('')
  const [ historyList, setHistoryList ] = useState([])

  const handleChange = (e) => {
    setInputText(e.target.value)
    setHistoryList([...historyList, e.target.value])
  }

  return (
    <>
      <input
        type='text'
        value={inputText}
        onChange={handleChange}
        placeholder='Enter text here'
      />
      <hr/><br/>
      <ul>
        {historyList.map((item, idx) =>
          <div key={idx}>{item}</div>
        )}
      </ul>
    </>
  )
}

export default InputElement;