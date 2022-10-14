import React, { Component } from 'react'
import './App.css';

import { Container, Divider, Grid, Form, Segment, Button, Icon, Header } from 'semantic-ui-react'
import DevRender from './Components/DevRender'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], 
      position: '',
      name: ''
    };
  }

  componentDidMount() {
    this.getDev();
  }

  getDev() {
    fetch("https://dev.coteries.com/exercice")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  add(e) {
    fetch("https://dev.coteries.com/exercice", {
        "method": "POST",
        "headers": {
          "x-rapidapi-host": "host",
          "x-rapidapi-key": "apikey",
          "content-type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify({
          name: this.state.name,
          position: this.state.position
        })
      })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      });
    e.preventDefault();


    this.getDev()
  }


  render() {
    const { items, name, position } = this.state;

    return (
      <Container>
        <Segment >
          <Grid columns={2} relaxed='very' stackable>

            <Grid.Column verticalAlign='middle'>
              <Header as='h4' icon textAlign='center'>
                <Icon name='users' circular />
                <Header.Content>Coteries Team</Header.Content>
              </Header>
              <DevRender dev={items}/>
            </Grid.Column>
            
            <Grid.Column verticalAlign='middle'>
              <Header as='h4' icon textAlign='center'>
                <Icon name='add user' circular />
                <Header.Content>Add New User</Header.Content>
              </Header>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input required
                  icon='user'
                  iconPosition='left'
                  label='Name'
                  placeholder='Name'
                  value={name}
                  onChange={(e) => this.handleChange({ name: e.target.value })}
                />
                <Form.Input required
                  icon='briefcase'
                  iconPosition='left'
                  label='Position'
                  placeholder='Position'
                  value={position}
                  onChange={(e) => this.handleChange({ position: e.target.value })}
                />
                <Form.Input required
                  icon='camera'
                  iconPosition='left'
                  label='Image'
                  placeholder='Image'
                  type="file"
                  // add storage handler
                />
                <Button content='Add' primary onClick={(e) => this.add(e)}/>
              </Form>
            </Grid.Column>

          </Grid>
          
          <Divider vertical>or</Divider>
        </Segment>
      </Container>
    );
  }
}

export default App;
