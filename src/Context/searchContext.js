import { createContext, useState } from 'react'

const Context = createContext({})

const SearchContextProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState({
    query: '',
    maxResults: 1,
    nextPageToken: ''
  })

  return (
    <Context.Provider
      value={{
        items,
        setItems,
        search,
        setSearch
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { SearchContextProvider }
export default Context
