import { useContext, useState } from 'react'
import VideosList from '../VideosList'
import PlayList from '../Playlist'
import videosContext from '../../Context/videosContext'
import { Title } from './styles'
import SearchForm from '../SearchForm'
import getVideos from '../../services/getVideos'
import { DragDropContext } from 'react-beautiful-dnd'
import { types } from '../../reducers/videosReducer'
import Player from '../Player'

const App = () => {
  const { store, dispatch, disableButton } = useContext(videosContext)
  const [dragging, setDragging] = useState(false)

  const handleLoadMore = async (event) => {
    //Load more videos
    //Load more videos
    event.preventDefault()
    const results = await getVideos({
      q: store.search.query,
      maxResults: store.search.maxResults,
      pageToken: store.search.nextPageToken
    })
    dispatch({
      type: types.ADD_FINDED_VIDEOS,
      payload: results.items
    })
    dispatch({
      type: types.SET_SEARCH_NEXT_PAGE,
      payload: results.nextPageToken
    })
  }

  const handleOnDragEnd = (result) => {
    //Finish the drag
    if (result.destination.droppableId !== result.source.droppableId) {
      //Send from VideosList to Playlist or viceversa

      const newFindedVideos = store.findedVideos.filter(
        (video) => video.id.videoId !== result.draggableId
      )
      dispatch({ type: types.DELETE_FINDED_VIDEO, payload: newFindedVideos }) //Delete dregged from VideosList
      dispatch({
        //Add dregged to Playlist
        type: types.ADD_PLAYLIST_VIDEO,
        payload: result.draggableId
      })
      setDragging(false)
    } else if (
      //Move one inside playlist
      result.source.droppableId === 'playlist' &&
      result.destination.droppableId === 'playlist'
    ) {
      const playlist = [...store.playlistVideos]
      const [recordedItem] = playlist.splice(result.source.index, 1)
      playlist.splice(result.destination.index, 0, recordedItem)
      dispatch({
        //Add dregged to Playlist
        type: types.SET_PLAYLIST_VIDEOS,
        payload: playlist
      })
    }
  }

  const handleDragUpdate = (results) => {
    //Update Playlist
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
        <VideosList
          items={store.findedVideos}
          handleClick={handleLoadMore}
          disabled={disableButton}
        />
        <PlayList dragging={dragging}></PlayList>
        <Player playlistVideos={store.playlistVideos} />
      </DragDropContext>
    </>
  )
}

export default App
