import { createContext, useState } from 'react'

const Context = createContext({})

const SearchContextProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState({
    query: '',
    maxResults: 1,
    nextPageToken: ''
  })
  const [playlistVideos, setPlaylistVideos] = useState([
    {
      kind: 'youtube#searchResult',
      etag: 'aw_zht8heMspKIByieGHnyn_6B8',
      id: 'DTgBLQKRQuA',
      snippet: {
        publishedAt: '2021-05-20T03:00:03Z',
        channelId: 'UCaXkIU1QidjPwiAYu6GcHjg',
        title:
          '‘Bombshell’: Why The Criminal Probe Into The Trump Organization Is A ‘Big Deal’',
        description:
          'It really signals that she thinks, not only is this a strong—and likely winnable—criminal case, but that something is going to happen ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/DTgBLQKRQuA/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/DTgBLQKRQuA/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/DTgBLQKRQuA/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'MSNBC',
        liveBroadcastContent: 'none',
        publishTime: '2021-05-20T03:00:03Z'
      }
    }
  ])

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
