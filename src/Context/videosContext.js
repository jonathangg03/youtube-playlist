import { createContext, useReducer, useState } from 'react'
import videosReducer, { initialState } from '../reducers/videosReducer'

const Context = createContext({})

const VideosContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(videosReducer, initialState)
  // const [items, setItems] = useState([])
  // const [search, setSearch] = useState({
  //   query: '',
  //   maxResults: 1,
  //   nextPageToken: ''
  // })
  // const [playlistVideos, setPlaylistVideos] = useState([])

  return (
    <Context.Provider
      value={{
        store,
        dispatch
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { VideosContextProvider }
export default Context
