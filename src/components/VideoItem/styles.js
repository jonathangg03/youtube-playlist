import styled from 'styled-components'

const CardContainer = styled.div`
  background-color: white;
  min-height: 350px;
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  box-shadow: 2px 1px 6px 0px #0000002b;
  padding-bottom: 30px;
`

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`

const CardContent = styled.section`
  padding: 10px 25px 0;
`

const CardTitle = styled.h2`
  font-size: 1.5rem;
  padding-bottom: 5px;
`

const CardDescription = styled.p`
  font-size: 1.2rem;
`
export { CardImage, CardContainer, CardContent, CardTitle, CardDescription }
