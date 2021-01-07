import React, { useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { NavBar } from './components/navbar';
import Chat from './components/chat';

export default function App() {
    const [connected, setConnected] = useState(false);
    const [name, setName] = useState('');

    return (
        <ChakraProvider theme={theme}>
            <NavBar connected={connected} setName={setName}/>
            <Chat setConnected={setConnected} name={name}/>
        </ChakraProvider>
    );
}