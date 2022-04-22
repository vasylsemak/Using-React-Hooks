import { useState } from 'react'

const InputUseState = () => {
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
          <li key={idx}>{item}</li>
        )}
      </ul>
    </>
  )
}

export default InputUseState