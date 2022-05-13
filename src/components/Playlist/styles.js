import styled from 'styled-components'
import { colors } from '../../../themes'

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
  position: relative;
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
  border: ${(props) => props.dragging && `4px dashed ${colors.main}`};

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 728px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 984px;
    grid-template-columns: repeat(1, 1fr);
  }
`

const DndMessage = styled.p`
  font-size: 2rem;
  position: absolute;
  top: calc(50% - 15px);
  left: calc(50% - 289.28px);
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
  DndMessage,
  CardTitle,
  CardDescription
}
