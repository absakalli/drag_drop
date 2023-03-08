export class _Data {
  UserName: string;
  UserPassword: string;
  FirmId: number;
  IsAllTimeLogined: boolean;
  ReadAuth: boolean;

  constructor(
    userName: string,
    userPassword: string,
    firmId: number,
    isAllTimeLogined: boolean
  ) {
    this.UserName = userName;
    this.UserPassword = userPassword;
    this.FirmId = firmId;
    this.IsAllTimeLogined = isAllTimeLogined;
    this.ReadAuth = true;
  }
}
