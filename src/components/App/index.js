import { useContext } from 'react'
import VideosList from '../VideosList'
import PlayList from '../Playlist'
import SearchContext from '../../Context/searchContext'
import { Title } from './styles'
import SearchForm from '../SearchForm'
import getVideos from '../../services/getVideos'
import { Button } from '../SearchForm/styles'
import { DragDropContext } from 'react-beautiful-dnd'
import { CardImage } from '../Playlist/styles'

const App = () => {
  const {
    items,
    setSearch,
    search,
    setItems,
    setPlaylistVideos,
    playlistVideos
  } = useContext(SearchContext)

  const handleSearch = async (event) => {
    event.preventDefault()
    const results = await getVideos({
      q: search.query,
      maxResults: search.maxResults,
      pageToken: search.nextPageToken
    })

    setItems((prev) => prev.concat(results.items))
    setSearch({ ...search, nextPageToken: results.nextPageToken })
  }

  const handleOnDragEnd = (result) => {
    console.log(result)
    if (result.destination.droppableId !== result.source.droppableId) {
      setItems((prev) =>
        prev.filter((el) => el.id.videoId !== result.draggableId)
      )
      setPlaylistVideos((prev) => prev.concat(result.draggableId))
    } else if (
      result.source.droppableId === 'playlist' &&
      result.destination.droppableId === 'playlist'
    ) {
      const playlist = [...playlistVideos]
      const [recordedItem] = playlist.splice(result.source.index, 1)
      playlist.splice(result.destination.index, 0, recordedItem)
      setPlaylistVideos(playlist)
    }
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Title>YouTube Playlist Creator</Title>
        <SearchForm />
        <VideosList items={items} />
        {items.length && <Button onClick={handleSearch}>Cargar más</Button>}
        <PlayList></PlayList>
        <CardImage
          iframe
          src={`https://www.youtube.com/embed?playlist=${playlistVideos}&controls={0}`}
          controls={0}
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></CardImage>
      </DragDropContext>
    </>
  )
}

export default App
