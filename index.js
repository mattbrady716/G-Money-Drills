var register =  {
<<<<<<< HEAD
  transactions: []
=======
  transactions: [];
>>>>>>> aa78e2b234826655208dc12ba2940fbc1d7045ca
}

function addTransaction(transaction) {
  register.transactions.push(transaction)
}

function reset () {
<<<<<<< HEAD
  register.transactions = []
=======
  register.transactions = [];
>>>>>>> aa78e2b234826655208dc12ba2940fbc1d7045ca
}

function countSalesOfType(item) {
  var count = 0
  var transactionArray = register.transactions
  for (var i = 0; i < transactionArray.length; i++) {
    for (var j = 0; j < transactionArray[i].items.length; j++) {
      if (transactionArray[i].items[j].description === item) {
      count += transactionArray[i].items[j].quantity
      }
    }
  }
  return count
}

function getTransactionsBetween(Date1, Date2){
  var transactions = [];
<<<<<<< HEAD

=======
  
>>>>>>> aa78e2b234826655208dc12ba2940fbc1d7045ca
  for (let i = 0; i < register.transactions.length; i++) {
    let datesTransactions = register.transactions[i];
    if (datesTransactions.date > new Date(Date1) && datesTransactions.date < new Date(Date2)){
      transactions.push(datesTransactions);
    }
  }

  return transactions;
}

module.exports = {
    register,
    addTransaction,
    countSalesOfType,
    getTransactionsBetween,
    reset,
};

