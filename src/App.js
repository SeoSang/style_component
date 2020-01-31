import React, { Fragment } from "react"
import styled, { createGlobalStyle } from "styled-components"

const GloabalStyle = createGlobalStyle`
body {
  margin:0;
  padding:0;
  background-color:blue;
}
`

function App() {
  return (
    <Fragment>
      <Container>
        <Button>test</Button>
        <Button danger>Danger </Button>
        <Button as="a" href="http://google.com" css="{text-decoration: none}">
          Google
        </Button>
      </Container>
      <GloabalStyle />
    </Fragment>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ff7979;
`

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  background-color: #6ab04c;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#eb4d4b" : "white")};
`

export default App
