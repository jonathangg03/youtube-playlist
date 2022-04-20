import { useState } from 'react'
import { Form, Input, Button } from './styles'

const SearchForm = () => {
  const [search, setSearch] = useState('')

  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    console.log(search)
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
