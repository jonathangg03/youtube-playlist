import { createContext, useReducer, useState } from 'react'
import videosReducer, { initialState } from '../reducers/videosReducer'

const Context = createContext({})

const VideosContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(videosReducer, initialState)
  const [disableButton, setDisabledButton] = useState(true)

  return (
    <Context.Provider
      value={{
        store,
        dispatch,
        disableButton,
        setDisabledButton
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { VideosContextProvider }
export default Context
