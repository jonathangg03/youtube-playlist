import styled from 'styled-components'

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

export { CardContainer, CardImage, CardContent, DndIcon }
