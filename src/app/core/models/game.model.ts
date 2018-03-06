export interface Game {
  time: number;
  steps: number;
  elements: Array<number>;
}

export interface Actions {
  dif: number;
  actionName: string;
}

export interface Exceptions {
  plus: Array<number>;
  minus: Array<number>;
}
