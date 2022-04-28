import styled from 'styled-components'

const PlayListContainer = styled.ul`
  border: 1px solid black;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 300px;
  overflow-y: auto;
  gap: 20px;
  margin: 20px auto;
  list-style: none;
`
export { PlayListContainer }
