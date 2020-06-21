function fibonacci_bf(n){
  if(n <= 0){
    return 0;
  } else if (n === 1){
    return 1;
  }
  return fibonacci_bf(n-1) + fibonacci_bf(n-2);
}

function printFibos(n){
  for(let i = 0; i <= n; i++){
    console.log(fibonacci_bf(i))
  }
}

printFibos(10)

function print_fibo_memo(n) {
  let memo = [];
  for(let i=0; i <= n; i++){
    console.log(`${i} : ${fibonacci_memo(i, memo)}`)
  }
}
function fibonacci_memo(n, memo){
  if(n <= 0){
    return 0;
  } else if(n == 1) {
    return 1;
  } else if(memo[n]){
    return memo[n]
  }
  memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2,memo);
  console.log(memo)
  return memo[n];
}

print_fibo_memo(100)
