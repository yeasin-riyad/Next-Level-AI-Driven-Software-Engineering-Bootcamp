// access >> modify
// 🔹 TypeScript-এ ৩টা main modifier
// Modifier---->	কোথা থেকে access করা যায়
// public---->	সব জায়গা (default)
// private---->	শুধু class এর ভিতরে
// protected---->   class + subclass

class BankAccount {
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
}

class StudentBankAccount extends BankAccount {
  test() {
    // this._userBalance;   // ❌ private access not allowed
  }
}

const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);

// mezbaBhaiAccount.addBalance(100);
// mezbaBhaiAccount.addBalance(50);

console.log(mezbaBhaiAccount);