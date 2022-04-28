import styled from 'styled-components'
import { colors, fonts } from '../../../themes'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SearchInput = styled.input`
  height: 40px;
  width: 100%;
  max-width: 700px;
  outline: none;
  border: 2px solid gray;
  margin: 0 auto 10px;
  padding: 0 15px;
  font-family: ${fonts.main};
`

const NumberInput = styled.input`
  height: 40px;
  outline: none;
  border: 2px solid gray;
  margin: 0 auto;
  padding: 0 15px;
  font-family: ${fonts.main};
  margin-left: 10px;
`

const MaxLabel = styled.label`
  font-size: 1.4rem;
  display: inline-block;
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

export { Form, SearchInput, NumberInput, Button, MaxLabel }
