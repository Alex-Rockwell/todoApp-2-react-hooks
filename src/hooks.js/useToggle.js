import {useState} from 'react'

function useToggle(initVal = false) {
  const [isToggled, setIsToggled] = useState(initVal)
  const toggle = () => setIsToggled(!isToggled)
  return [isToggled, toggle]
}

export default useToggle