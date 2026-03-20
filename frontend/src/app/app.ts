import { Component, OnInit, Signal, signal } from '@angular/core';
import { ChatService } from './services/chat-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageInterface } from './interfaces/message.interface';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
  ],
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
