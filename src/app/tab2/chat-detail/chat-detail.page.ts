import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit {
  public id: string;
  constructor(
    private route: ActivatedRoute,
    private modalController: ModalController,
    private navController: NavController
  ) {
    this.id = route.snapshot.paramMap.get('id');
  }

  public presentModal(): void {}

  ngOnInit() {}
}
