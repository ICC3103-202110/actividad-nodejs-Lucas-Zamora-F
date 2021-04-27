function fibonacci(x) {
    if (x <= 1)
        return x
    else 
        return fibonacci(x - 1) + fibonacci(x -2)
        
    
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

readline.question(`Select a Number: `, number => {
  console.log(fibonacci(number))
  readline.close()
})