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

const Title = styled.h2`
  font-size: 1.8rem;
  margin-top: 20px;
`

const PlayListContainer = styled.ul`
  background-color: #f7f7f7;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  overflow-y: auto;
  gap: 20px;
  margin: 20px 0;
  list-style: none;
  min-height: 300px;
  max-height: 2000px;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 728px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 984px;
    grid-template-columns: repeat(1, 1fr);
  }
`

const CardContainer = styled.div`
  background-color: white;
  min-height: 350px;
  height: 100%;
  border-radius: 0 0 15px 15px;
  overflow: hidden;
  width: 100%;
  box-shadow: 2px 1px 6px 0px #0000002b;
`

const CardImage = styled.iframe`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

const CardContent = styled.section`
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
`

const DndIcon = styled.img`
  width: 28px;
  height: 28px;
`

const CardTitle = styled.h2`
  font-size: 1.8rem;
  padding-bottom: 5px;
`

const CardDescription = styled.div``

export {
  Container,
  Title,
  PlayListContainer,
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  DndIcon
}
