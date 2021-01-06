import React from 'react';
import SockJsClient from 'react-stomp';
import { Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Message } from './message';
import styled from '@emotion/styled';

const ScrollSection = styled.div`
    margin: auto;
    padding: 25px;
    max-height: 80vh;
    max-width: 100vw;
    overflow-y: scroll;
`;

const InputBox = styled.div`
    position: fixed;
    bottom: 0;
    width: 100
`;

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            composeMessage: '',
            name: ''
        };
    }

    sendMessage = () => {
        console.log('name ' + this.state.name);
        console.log('message ' + this.state.composeMessage);
        this.clientRef.sendMessage('app/user-all', JSON.stringify({
            name: this.state.name,
            message: this.state.composeMessage
        }));
    };

    updateComposeMessage = (event) => {
        this.setState({composeMessage: event.target.value});
    };

    render() {
        return (
            <Box>
                <ScrollSection>
                    {this.state.messages.map(m => [
                            <Box align={m.id % 2 === 0 ? 'right' : 'left'}>
                                <Message
                                    name={m.name}
                                    message={m.message}
                                    sender={m.name === this.state.name}/>
                            </Box>
                        ]
                    )}
                </ScrollSection>
                <Box
                    borderWidth='3px'
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        width: '100vw',
                        height: '10vh',
                        margin: 'auto',
                        padding: '10px'
                    }}>
                    <InputGroup size="lg">
                        <Input
                            pr="4.5rem"
                            type='text'
                            value={this.state.composeMessage}
                            onChange={this.updateComposeMessage}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={this.sendMessage}>
                                Send
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <SockJsClient url='http://localhost:8080/chat/'
                              topics={['/topic/user']}
                              onConnect={() => {
                                  this.props.setConnected(true);
                              }}
                              onDisconnect={() => {
                                  this.props.setConnected(false);
                              }}
                              onMessage={(msg) => {
                                  const jobs = this.state.messages;
                                  jobs.push(msg);
                                  this.setState({messages: jobs});
                              }}
                              ref={(client) => {
                                  this.clientRef = client;
                              }}/>
            </Box>
        );
    }
};