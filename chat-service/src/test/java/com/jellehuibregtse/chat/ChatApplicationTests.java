package com.jellehuibregtse.chat;

import com.jellehuibregtse.chat.controller.SocketController;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ChatApplicationTests {

    @Autowired
    private SocketController socketController;

    @Test
    void contextLoads() {
        Assertions.assertNotNull(socketController);
    }

}
