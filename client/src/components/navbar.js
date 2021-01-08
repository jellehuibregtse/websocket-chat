import React from 'react';
import { Badge, Box, Center, Flex, Heading, Input, InputGroup, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const NavBar = ({connected, setName}) => {
    return (
        <Box boxShadow='sm'>
            <Box
                h='0.40rem'
                bg='blue.500'/>
            <Flex
                as='nav'
                h='4.5rem'>
                <Center>
                    <Heading mx='6' size='lg'>
                        Websocket Client
                    </Heading>
                    <Badge mx='6' colorScheme={connected ? 'green' : 'red'}>
                        {connected ? 'Connected' : 'Disconnected'}
                    </Badge>
                    <Box mx='6' width='20rem'>
                        <InputGroup size="lg">
                            <Input
                                pr='4.5rem'
                                onChange={(event) => setName(event.target.value)}
                                placeholder='Enter your name here'
                            />
                        </InputGroup>
                    </Box>
                </Center>
                <Spacer/>
                <Center>
                    <ColorModeSwitcher mr='6' justifySelf='flex-end'/>
                </Center>
            </Flex>
        </Box>
    );
};