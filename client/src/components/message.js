import React from 'react';
import { Box } from '@chakra-ui/react';

export const Message = ({name, message, sender}) => {
    return (
        <Box maxW='sm'
             borderWidth='1px'
             borderRadius='lg'
             bg={sender ? 'blue.500' : 'white'}
             color={sender ? 'white' : 'black'}>
            <Box p='6'
                 align='left'>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated>
                    {name}
                </Box>

                <Box>
                    {message}
                </Box>
            </Box>
        </Box>
    );
};