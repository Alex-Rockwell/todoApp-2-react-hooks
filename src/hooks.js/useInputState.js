import {useState} from 'react'

function useInputState(initVal = '') {
  const [inp, setInp] = useState(initVal)
  const handleInpChange = (e) => {
    setInp(e.target.value)
  }
  const resetInp = () => {
    setInp('')
  }
  return [inp, handleInpChange, resetInp]
}

export default useInputState