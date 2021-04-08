import { Component } from '@angular/core';
import { ChatItem } from './chat-detail/interfaces/chat-item';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public list: ChatItem[] = Array(100)
    .fill(null)
    .map((a, index) => ({
      id: index,
      title: `title: ${index}`,
      subtitle: '',
      unreadMessages: index,
    }));
  constructor() {}
}
