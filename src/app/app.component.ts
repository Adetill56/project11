import { Component, OnInit } from '@angular/core';
import { Card } from './shared/card.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project11-hw';
  arr: Card[] = [];
  name: string;
  status: boolean;

  ngOnInit() {
    for (let i = 1; i < 11; i++) {
      let card: Card = { id: i, name: 'Пятница #' + i, status: Boolean(Math.floor(Math.random() * 2)) };
      this.arr.push(card);
    }

  }

  delete(id: number) {
    let index = this.arr.findIndex(item => item.id === id);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  }

  addCard() {
    let newCard: Card = { name: this.name, status: this.status };
    let id = this.arr.length > 0 ? this.arr[this.arr.length - 1].id + 1 : 1;
    newCard.id = id;
    this.arr.push(newCard);
  }
}
