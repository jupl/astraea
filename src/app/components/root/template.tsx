import * as React from 'react'
import {Container, Header, Menu} from 'semantic-ui-react'
import styled from 'styled-components'

// Container component
const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
const MenuBar = styled.div``
const Body = styled.div`
  flex: 1;
  overflow: auto;
`

/**
 * Render root component representing the entire application
 * @return Root component
 */
export function AppRoot() {
  return (
    <Layout>
      <MenuBar>
        <Container>
          <Menu secondary>
            <Menu.Item header>Application</Menu.Item>
          </Menu>
        </Container>
      </MenuBar>
      <Body>
        <Container>
          <Header>Hello, world</Header>
        </Container>
      </Body>
    </Layout>
  )
}
