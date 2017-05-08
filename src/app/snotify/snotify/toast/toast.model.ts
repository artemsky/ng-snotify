export class Toast {
  public id;
  constructor(
    public title: string,
    public body: string,
    public timeout: number = 0
  ) {
    this.id = new Date();
  }
}
