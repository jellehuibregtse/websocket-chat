import React from 'react';
import { Badge, Box, Center, Flex, Heading, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const NavBar = ({connected}) => {
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
                    <Badge colorScheme={connected ? 'green' : 'red'}>
                        {connected ? 'Connected' : 'Disconnected'}
                    </Badge>
                </Center>
                <Spacer/>
                <Center>
                    <ColorModeSwitcher mr='6' justifySelf='flex-end'/>
                </Center>
            </Flex>
        </Box>
    );
};