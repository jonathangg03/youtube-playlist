import { useContext, useState } from 'react'
import SearchContext from '../../Context/searchContext'
import getVideos from '../../services/getVideos'
import { Form, Input, Button } from './styles'

const SearchForm = () => {
  const [search, setSearch] = useState('')
  const { setItems } = useContext(SearchContext)

  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSearch = async (event) => {
    event.preventDefault()
    const items = await getVideos({ q: search, maxResults: 5 })
    setItems(items)
  }

  return (
    <>
      <Form onSubmit={handleSearch}>
        <Input
          placeholder='Ingresa una palabra para realizar una busqueda...'
          value={search}
          onChange={handleInputChange}
        />
        <Button>Buscar</Button>
      </Form>
    </>
  )
}

export default SearchForm
