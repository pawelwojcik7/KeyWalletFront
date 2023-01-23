export class IpAddress {

  constructor(
    public id: number,
    public okLoginNum: number,
    public badLoginNum: number,
    public lastBadLoginNum: number,
    public permanentLock: boolean,
    public tempLock: string,
    public ipAddress: string,
  ) {
  }
}
