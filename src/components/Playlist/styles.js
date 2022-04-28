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
  width: 100%;
  max-width: 280px;

  @media screen and (min-width: 768px) {
    max-width: 728px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 984px;
  }
`
export { PlayListContainer }
