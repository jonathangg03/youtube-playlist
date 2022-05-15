import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 728px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 984px;
  }
`

const VideoList = styled.ul`
  background-color: #f7f7f7;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  overflow-y: auto;
  gap: 20px;
  list-style: none;
  margin: 20px 0;
  min-height: 300px;
  max-height: 620px;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 728px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 984px;
    grid-template-columns: repeat(3, 1fr);
  }
`

const Title = styled.h2`
  font-size: 1.8rem;
  margin-top: 20px;
`

export { VideoList, Title, Container }
