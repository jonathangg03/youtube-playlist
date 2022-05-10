import { useContext, useState } from 'react'
import VideosList from '../VideosList'
import PlayList from '../Playlist'
import videosContext from '../../Context/videosContext'
import { Title } from './styles'
import SearchForm from '../SearchForm'
import getVideos from '../../services/getVideos'
import { Button } from '../SearchForm/styles'
import { DragDropContext } from 'react-beautiful-dnd'
import Player from '../Player'

const App = () => {
  const {
    items,
    setSearch,
    search,
    setItems,
    setPlaylistVideos,
    playlistVideos
  } = useContext(videosContext)
  const [dragging, setDragging] = useState(false)

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
    if (result.destination.droppableId !== result.source.droppableId) {
      setItems((prev) =>
        prev.filter((el) => el.id.videoId !== result.draggableId)
      )
      setPlaylistVideos((prev) => prev.concat(result.draggableId))
      setDragging(false)
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

  const handleDragUpdate = (results) => {
    if (
      results.destination.droppableId === 'playlist' &&
      results.source.droppableId === 'videos'
    ) {
      setDragging(true)
    } else {
      setDragging(false)
    }
  }

  return (
    <>
      <DragDropContext
        onDragEnd={handleOnDragEnd}
        onDragUpdate={handleDragUpdate}
      >
        <Title>YouTube Playlist Creator</Title>
        <SearchForm />
        <VideosList items={items} />
        {items.length && <Button onClick={handleSearch}>Cargar más</Button>}
        <PlayList dragging={dragging}></PlayList>
        <Player playlistVideos={playlistVideos} />
      </DragDropContext>
    </>
  )
}

export default App
