import { useState } from 'react'

function useValue() {
  let [value, setValue] = useState("")
  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  return {value, handleInputChange}
}

export default useValue