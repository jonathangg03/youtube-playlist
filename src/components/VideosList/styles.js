import styled from 'styled-components'

const VideoList = styled.ul`
  border: 1px solid black;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 20px auto 0;
`

export { VideoList }
