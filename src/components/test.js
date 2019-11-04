import React, { Component } from 'react';
import Button from "@material-ui/core/Button"
import Container from '@material-ui/core/Container/Container';

class test extends Component {
    render() {
        return (
            <div>
                <h1>Hello world (wah)</h1>
                <Button variant="contained" color="primary">Check It Ouuuuuuut</Button>
                <Container>
                    <p>
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    </p>
                    <p>
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    </p>
                    <p>
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    </p>
                </Container>
            </div>
        );
    }
}

export default test;