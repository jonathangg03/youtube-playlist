import styled from 'styled-components'

const VideoList = styled.ul`
  border: 1px solid black;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow-y: auto;
  gap: 20px;
  margin: 20px auto 0;
  list-style: none;
  min-height: 300px;
  max-height: 620px;
  width: 100%;
  max-width: 280px;

  @media screen and (min-width: 768px) {
    max-width: 728px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 984px;
  }
`

export { VideoList }
