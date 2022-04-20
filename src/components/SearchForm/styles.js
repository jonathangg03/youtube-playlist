import styled from 'styled-components'
import { colors, fonts } from '../../../themes'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  height: 40px;
  width: 100%;
  max-width: 700px;
  outline: none;
  border: 2px solid gray;
  margin: 0 auto;
  padding: 0 15px;
  font-family: ${fonts.main};
`

const Button = styled.button`
  border: none;
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

export { Form, Input, Button }
