import styled from 'styled-components'
import { colors, fonts } from '../../../themes'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 728px;
  margin: 0 auto;
`

const SearchInput = styled.input`
  height: 40px;
  width: 100%;
  outline: none;
  border: 2px solid gray;
  margin: 0 0 10px;
  padding: 0 15px;
  font-family: ${fonts.main};
`

const MaxLabel = styled.label`
  font-size: 1.4rem;
  width: 100%;
`

const Button = styled.button`
  border: none;
  display: block;
  padding: 10px 0;
  font-family: ${fonts.main};
  font-size: 1.6rem;
  width: 200px;
  margin: 10px auto 0;
  outline: none;
  background-color: ${colors.main};
  font-weight: 600;
  color: white;
`

export { Form, SearchInput, Button, MaxLabel }
