import { useContext } from 'react'
import videosContext from '../../Context/videosContext'
import { Button } from '../SearchForm/styles'
import getVideos from '../../services/getVideos'
import { types } from '../../reducers/videosReducer'

const LoadMoreButton = () => {
  const { store, dispatch, disableButton } = useContext(videosContext)

  const handleClick = async (event) => {
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

  return (
    <Button onClick={handleClick} disabled={disableButton}>
      Cargar más
    </Button>
  )
}

export default LoadMoreButton
