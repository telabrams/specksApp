import { Component, OnInit, OnDestroy } from '@angular/core';

// rxjs
import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";

// Interfaces
import { Game, Actions } from '../../models/game.model';

// Services
import { UserService } from '../../services/user.service';
import { PlayService } from '../../services/play.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
  providers: [ PlayService ]
})
export class PlayComponent implements OnInit {
  private gameState: Game;
  private actions: Actions;
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private us: UserService,
    private ps: PlayService
  ) {
    this.ps.generateStartState()
      .takeUntil(this.unsubscribe)
      .subscribe(data => {
        this.gameState = data;
      });
  }

  private swipe(element: number) {
    this.ps.startGame();
    this.ps.changeState(element);
  }

  ngOnInit() {
    // console.log(this.game);
  }

  test() {
    this.ps.winHuck(1520352508);
  }

  ngOnDestroy() {
    console.log('destroyed!')
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


}
