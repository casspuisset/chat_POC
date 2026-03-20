import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private client!: Client;

  connect(onMessage: (msg: any) => void) {
    this.client = new Client({
      brokerURL: 'ws://localhost:8080/chat',
      reconnectDelay: 5000,
    });

    this.client.onConnect = () => {
      console.log('Connected');

      this.client.subscribe('/topic/messages', (message) => {
        onMessage(JSON.parse(message.body));
      });
    };

    this.client.activate();
  }

  sendMessage(message: any) {
    this.client.publish({
      destination: '/app/send',
      body: JSON.stringify(message),
    });
  }
}
