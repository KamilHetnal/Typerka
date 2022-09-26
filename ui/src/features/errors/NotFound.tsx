import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound() {
    return(
        <Segment placeholder>
            <Header icon>
                <Icon name='search'/>
                Oops- nic nie znalazłem
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/' primary>
                    Wróć do strony główniej
                </Button>
            </Segment.Inline>
        </Segment>
    )
}