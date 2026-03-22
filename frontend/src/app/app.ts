import { Component, OnInit, Signal, signal } from '@angular/core';
import { ChatService } from './services/chat-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageInterface } from './interfaces/message.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('frontend');
  readonly messages = signal<MessageInterface[]>([]);
  readonly username = signal<String | undefined>(undefined);
  user = '';
  content = '';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.connect((message) => {
      this.messages.set([...this.messages(), message]);
    });
  }

  send() {
    this.chatService.sendMessage({
      user: this.user,
      content: this.content,
    });
    this.content = '';
  }

  createUser() {
    this.username.set(this.user);
  }
}
