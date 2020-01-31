import React, { Component } from "react"
import styled, { injectGlobal, css } from "styled-components"

const myStyle = css`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(50, 50, 92, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`

const Input = styled.input.attrs({
  required: true
})`
  border-radius: 15px;
  ${myStyle}
`

class ApplyInput extends Component {
  render() {
    return (
      <>
        <Input placeholder="hello"></Input>
      </>
    )
  }
}

export default ApplyInput
