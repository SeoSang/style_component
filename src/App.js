import React, { Fragment } from "react"
import styled, { css, createGlobalStyle, keyframes } from "styled-components"

const GloabalStyle = createGlobalStyle`
body {
  margin:0;
  padding:0;
  background-color:#dff9fb;
}
`

function App() {
  return (
    <Fragment>
      <Container>
        <Button>test</Button>
        <Button danger rotationTime={5}>
          Danger{" "}
        </Button>
        <Button as="a" href="http://google.com" css="{text-decoration: none}">
          Google
        </Button>
      </Container>
      <GloabalStyle />
    </Fragment>
  )
}

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const rotationAnimation = ({ danger, rotationTime }) => {
  if (danger) {
    return css`
      ${rotation} ${rotationTime}s linear infinite
    `
  }
}

const Container = styled.div`
  margin: 0 auto;
  width: 30%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ff7979;
  text-align: center;
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
  animation: ${props => rotationAnimation(props)};
`

export default App
