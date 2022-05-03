import styled from 'styled-components'

const VideoList = styled.ul`
  background-color: #f7f7f7;
  padding: 20px;
  width: 1000px;
  display: grid;
  grid-template-columns: 1fr;
  overflow-y: auto;
  gap: 20px;
  margin: 20px auto;
  list-style: none;
  min-height: 300px;
  max-height: 620px;
  width: 100%;
  max-width: 280px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 728px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 984px;
    grid-template-columns: repeat(3, 1fr);
  }
`

export { VideoList }
