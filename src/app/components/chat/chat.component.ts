import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public chatShown: boolean;

  constructor() { }

  ngOnInit() {
    this.chatShown = false;
  }

  public toggleChat() {
    if (this.chatShown) {
      console.log(this.chatShown);
      this.chatShown = false;
    } else {
      console.log(this.chatShown);
      this.chatShown = true;
    }
  }

}
