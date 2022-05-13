import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  max-width: 280px;
  height: 200px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 728px;
    height: 500px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 984px;
  }
`

const Title = styled.h2`
  font-size: 1.8rem;
  margin-top: 20px;
`

const Video = styled.iframe`
  margin: 20px 0 40px;
  width: 100%;
  height: 100%;
`

export { Container, Title, Video }
