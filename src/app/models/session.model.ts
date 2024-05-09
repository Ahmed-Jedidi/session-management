// session.ts

export class Session {
    constructor(
      public id: number,
      public name: string,
      public track: string,
      public date: Date,
      public duree: number,
      public address: string,
      public Participants: number,
      public isCompleted: boolean
    ) {}
  }
  


