import styled from 'styled-components'

const PlayListContainer = styled.ul`
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

const CardContainer = styled.div`
  background-color: white;
  min-height: 350px;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  box-shadow: 2px 1px 6px 0px #0000002b;
  padding-bottom: 30px;
`

const CardImage = styled.iframe`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

const CardContent = styled.section`
  padding: 10px 25px 0;
`

const CardTitle = styled.h2`
  font-size: 1.8rem;
  padding-bottom: 5px;
`

const CardDescription = styled.p`
  font-size: 1.2rem;
`

export {
  PlayListContainer,
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription
}
