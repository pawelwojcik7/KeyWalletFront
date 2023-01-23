export class UserLogin {

  constructor(
    public id: number,
    public time: string,
    public correct: boolean,
    public idUser: number,
    public session: string,
    public idAddress: string,
  ) {
  }
}
