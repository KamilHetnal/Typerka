import React from 'react'
import { Container, Item } from 'semantic-ui-react'

export default function StatutePage() {
  return (
    <Container text >
    <Item>
        <Item.Content>
            <Item.Header as={'h3'}>
                Zasady gry
            </Item.Header>
            <Item.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Item.Description>
        </Item.Content>
    </Item>
</Container>
  )
}
