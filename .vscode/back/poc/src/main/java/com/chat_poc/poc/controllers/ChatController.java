package com.chat_poc.poc.controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.chat_poc.poc.models.ChatMessage;

@Controller
public class ChatController {

    @MessageMapping("/send")
    @SendTo("/topic/messages")
    public ChatMessage sendMessage(
            @Payload ChatMessage chatMessage) {
        return chatMessage;
    }
}