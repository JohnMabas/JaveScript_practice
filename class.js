class studentForm {
  discount = 10;
  constructor(fName, lName, fess) {
    this.fristName = fName;
    this.lastName = lName;
    this.fees = fess;
    this.applyDiscount();
    this.greet();
  }
  applyDiscount() {
    if (this.fees === 100000) {
      let applicableDiscount = this.fees * (this.discount / 100);
      this.fees -= applicableDiscount;
      // return this.fees
    } else {
      return this.fees;
    }
  }

  greet() {
    return `Hello ${this.fristName}`;
  }
}

let firstRecord = new studentForm("Mabas", "John", 100000);
let record2 = new studentForm("Hope", "Joe", 20000);
let record3 = new studentForm("Joy", "Dang", 100000);
let record4 = new studentForm("Ruffy", "Emma", 20000);

// console.log(firstRecord.greet())

// ////////////

class bankAccount {
  constructor(name, amount) {
    this.name = name;
    this.accountNumber = this.genAccountNumber();
    this.balance = 0;
    // this.genAccountNumber();
    // this.deposit();
    // this.withdraw();
  }

  genAccountNumber() {
    return  Math.floor(Math.random() * 10000000000);
    // return Math.random()
   
  }

  deposit(money){
      this.balance += money;

    }

    withdraw(amount){
        this.balance -= amount
    }
  }


let user1 = new bankAccount("john", 0);
user1.deposit(10000);
user1.withdraw(5000)

console.log(user1);
