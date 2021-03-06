import { useContext } from 'react'
import videosContext from '../../Context/videosContext'
import getVideos from '../../services/getVideos'
import { Form, SearchInput, Button, MaxLabel } from './styles'
import { types } from '../../reducers/videosReducer'

const SearchForm = () => {
  const { store, dispatch, setDisabledButton } = useContext(videosContext)

  const handleSearch = async (event) => {
    event.preventDefault()
    setDisabledButton(false)
    const results = await getVideos({
      q: store.search.query,
      maxResults: store.search.maxResults
    })
    dispatch({
      type: types.SET_FINDED_VIDEOS,
      payload: results.items
    })
    dispatch({
      type: types.SET_SEARCH_NEXT_PAGE,
      payload: results.nextPageToken
    })
  }

  return (
    <Form onSubmit={handleSearch}>
      <SearchInput
        placeholder='Ingresa una palabra para realizar una busqueda...'
        value={store.search.query}
        onChange={(event) => {
          setDisabledButton(true)
          dispatch({
            type: types.SET_SEARCH_QUERY,
            payload: event.target.value
          })
        }}
      />
      <MaxLabel>
        <span>Cantidad de resultados: </span>
        <SearchInput
          type='number'
          onChange={(event) => {
            setDisabledButton(true)
            dispatch({
              type: types.SET_SEARCH_MAX,
              payload: event.target.value
            })
          }}
          min={1}
          value={store.search.maxResults}
        />
      </MaxLabel>
      <Button>Buscar</Button>
    </Form>
  )
}

export default SearchForm
