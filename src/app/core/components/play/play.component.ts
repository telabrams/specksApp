import { Component, OnInit } from '@angular/core';

// Interfaces
import { Game } from '../../models/game.model';

// Services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  private game: Game;

  constructor(
    private us: UserService,
  ) {
    this.game = {
      time: 0,
      steps: 0,
      elements: this.randomize(15)
    }
  }

  private randomize(quantity: number): Array<number> {
    let arr = [];
    while (arr.length < quantity) {
      let randomNum = Math.floor(Math.random()*quantity);
      if (arr.indexOf(randomNum) > -1) continue;
      arr[arr.length] = randomNum;
    }
    return arr;
  }

  private swipe(element) {
    let elementPosition = this.game.elements.indexOf(element);
    let emptyPosition = this.game.elements.indexOf(0);
    let array = this.game.elements;

    console.log(this.game.elements);
    console.log(elementPosition, emptyPosition);

    array.reduce((prev, cur, index, arr) => {
      if (cur === elementPosition) {
        console.log(cur);
        return array[cur] = 0;

      }
      if (cur === emptyPosition) {
        console.log(cur);
        return array[cur] = element;
      }
      console.log(arr)
      // return arr;
    }, 0)
    console.log(array);

  }

  ngOnInit() {
    console.log(this.game);
  }


}
