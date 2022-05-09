import { createContext, useState } from 'react'

const Context = createContext({})

const SearchContextProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState({
    query: '',
    maxResults: 1,
    nextPageToken: ''
  })
  const [playlistVideos, setPlaylistVideos] = useState([])

  return (
    <Context.Provider
      value={{
        items,
        setItems,
        search,
        setSearch,
        playlistVideos,
        setPlaylistVideos
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { SearchContextProvider }
export default Context
