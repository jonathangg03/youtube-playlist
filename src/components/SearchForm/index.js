import { useContext } from 'react'
import SearchContext from '../../Context/searchContext'
import getVideos from '../../services/getVideos'
import { Form, SearchInput, Button, NumberInput, MaxLabel } from './styles'

const SearchForm = () => {
  const { setItems, search, setSearch } = useContext(SearchContext)

  const handleInputChange = (event) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value
    })
  }

  const handleSearch = async (event) => {
    event.preventDefault()
    const results = await getVideos({
      q: search.query,
      maxResults: search.maxResults
    })
    setItems(results.items)
    setSearch({ ...search, nextPageToken: results.nextPageToken })
  }

  return (
    <>
      <Form onSubmit={handleSearch}>
        <SearchInput
          placeholder='Ingresa una palabra para realizar una busqueda...'
          value={search.query}
          onChange={handleInputChange}
          name='query'
        />
        <MaxLabel>
          <span>Cantidad de resultados: </span>
          <NumberInput
            type='number'
            name='maxResults'
            onChange={handleInputChange}
            min={1}
            value={search.maxResults}
          />
        </MaxLabel>
        <Button>Buscar</Button>
      </Form>
    </>
  )
}

export default SearchForm
