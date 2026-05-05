// access >> modify

class BankAccount123 {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  private addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }
 
  callHiddenMethod(balance:number){
    this.addBalance(balance)
  }

}

class StudentBankAccount123 extends BankAccount123 {
  test(money:number) {
    this.callHiddenMethod(money);   // ✅ private method call allowed through public method
   // this._userBalance;   // ❌ private access not allowed
  }
}

const mezbaBhaiAccount123 = new BankAccount123(111, "Mezba", 20);



mezbaBhaiAccount123.callHiddenMethod(100);