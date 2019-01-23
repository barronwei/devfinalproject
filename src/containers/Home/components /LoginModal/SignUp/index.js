import React, { Component } from 'react'
import { Title, SubmitButton, StyledLink, Container } from './styles'
import {
  Box,
  FormField,
  TextInput,
  Heading,
  Table,
  TableBody,
  TableCell,
  Anchor
} from 'grommet'
import Navbar from '../../../../../components/Navbar'
import Welcome from '../../../../../components/Welcome'
import { Mutation } from 'react-apollo'
import CREATE_USER from './graphql'
// import { isUndefined } from 'util'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      hometown: ''
    }
  }

  onChange = (key, e) => {
    this.setState({ [key]: e.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <Welcome />
        <Navbar />
        <Container>
          <Box border={{ color: 'dark-1' }} pad="xlarge">
            <Heading size="small">A Bite Of Home</Heading>
            <Title>Tell Us About Yourself</Title>
            <FormField>
              <TextInput
                placeholder="Name"
                onChange={e => this.onChange('name', e)}
              />
            </FormField>
            <FormField>
              <TextInput
                placeholder="Email"
                onChange={e => this.onChange('email', e)}
              />
            </FormField>
            <FormField>
              <TextInput
                placeholder="Password"
                onChange={e => this.onChange('password', e)}
              />
            </FormField>
            <FormField>
              <TextInput
                placeholder="What is your Hometown?"
                onChange={e => this.onChange('name', e)}
              />
            </FormField>
            <Mutation mutation={CREATE_USER}>
              {createUser => (
                <SubmitButton
                  onClick={() => {
                    createUser({
                      variables: {
                        input: {
                          name: this.state.name,
                          email: this.state.email,
                          password: this.state.password,
                          hometown: this.state.hometown
                        }
                      }
                    })
                  }}
                >
                  Get Started
                </SubmitButton>
              )}
            </Mutation>
            <Table alignSelf="center" margin="xsmall">
              <TableBody>
                <TableCell verticalAlign="bottom">
                  <StyledLink to="/">
                    <Anchor
                      hover={{ textDecoration: 'none' }}
                      label="Home"
                      color="dark-2"
                    />
                  </StyledLink>
                </TableCell>
                <TableCell verticalAlign="bottom">
                  <StyledLink to="/LogIn">
                    <Anchor
                      hover={{ textDecoration: 'none' }}
                      label="Log In"
                      color="dark-2"
                    />
                  </StyledLink>
                </TableCell>
              </TableBody>
            </Table>
          </Box>
        </Container>
      </React.Fragment>
    )
  }
}

export default SignUp
