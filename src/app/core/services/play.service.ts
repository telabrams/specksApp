import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Services
import { ToastrService } from 'ngx-toastr';

// Interfaces
import { Game, Actions, Exceptions } from '../models/game.model';

@Injectable()
export class PlayService {
  private game: BehaviorSubject<Game>;
  private actions: Actions;
  private exceptions: Exceptions = {
    plus: [0, 3, 6, 9, 12],
    minus: [2, 5, 8, 11, 14]
  }
  private startTime: number;
  private endTime: number;
  private winPosition: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private http: HttpClient
  ) {
    console.log('service')
    this.game = new BehaviorSubject({
      time: 0,
      steps: 0,
      elements: this.randomize(15)
    });
  }

  generateStartState(): Observable<Game> {
    console.log(this.game.getValue());
    return this.game.asObservable();
  }

  startGame(): void {
    this.startTime = new Date().getTime();
  }

  private winState(state: Array<number>): boolean {
    const winPosition = JSON.stringify(this.winPosition),
          curState = JSON.stringify(state);
    return winPosition === curState ? true : false;
  }

  private updateStep(curState: Game, step: number, array: Array<number>): void {
    this.game.next(Object.assign(curState, {
      steps: step+1,
      elements: array
    }))
    const updatedState = this.getState();
    console.log(updatedState)
    if (this.winState(updatedState.elements)) {
      this.endTime = new Date().getTime();
      this.game.next(Object.assign(updatedState, {
        time: this.endTime - this.startTime
      }))
      this.toastr.success(`Congratulations!!! You are win!`);
      console.log(this.getState());
      this.router.navigate(['/dashboard/records']);
    }
  }

  private getState(): Game {
    return this.game.getValue();
  }

  private exceptionCheck(action: string, position: number): boolean {
    let checkResult = true;
    switch (action) {
      case 'plus':
        this.exceptions.plus.map(val => {
          if (val === position) checkResult = false
        })
      break;
      case 'minus':
        this.exceptions.minus.map(val => {
          if (val === position) checkResult = false
        })
      break;
    }
    return checkResult;
  }

  changeState(element: number): void {
    let curState = this.getState();
    let elementPosition = curState.elements.indexOf(element);
    let emptyPosition = curState.elements.indexOf(0);
    let array = curState.elements;
    array.map((val, index, arr) => {
      if (elementPosition === emptyPosition+1 && this.exceptionCheck('plus', elementPosition) ||
          elementPosition === emptyPosition-1 && this.exceptionCheck('minus', elementPosition) ||
          elementPosition === emptyPosition+3 ||
          elementPosition === emptyPosition-3) {
        if (index === elementPosition) {
          return array[index] = 0;
        }
        if (index === emptyPosition) {
          return array[index] = element;
        }
        this.updateStep(curState, curState.steps, array);
        console.log(curState);
      }
    })
  }

  winHuck(time) {
    this.updateStep({
      time: time - this.endTime,
      steps: 0,
      elements: this.winPosition
    },
    0,
    this.winPosition
    );
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

}
