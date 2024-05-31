const prime_list = document.getElementById('prime_list')
const prime_even = document.getElementById('prime_even')
const prime_noneven = document.getElementById('prime_noneven')
const prime_count = document.getElementById('prime_count')
const even_count = document.getElementById('even_count')
const noneven_count = document.getElementById('noneven_count')
const search_btn = document.getElementById('search_btn')
const input = document.getElementById('input')

function isEven(n) {
    if (n%2 === 0){
        return true
    }else{
        return false
    }
}
function isPrime(n1) {
    for (let i = 2; i <= n1/2; i++){
      if (n1 % i === 0) return false
    }
    return true
  }

search_btn.addEventListener('click', () =>{
    console.log(Number(input.textContent)+1)
    mainFunction(Number(input.textContent))
    input.textContent = ''
})

const mainFunction = (number) =>{
    let array = []
    let even_count1 = 0
    let noneven_count1 = 0
    let prime_even_arr = []
    let prime_noneven_arr = []
    for (let i = 2; i < number; i++) {
        if (isPrime(i)){
            array.push(i)
        }
    }
    for (let i = 2; i < number+1; i++) {
        if (isEven(i)) {
            prime_even_arr.push(i)
            even_count1 ++
        }else{
            prime_noneven_arr.push(i) 
            noneven_count1 ++
        }
        
    }
    // console.log(prime_noneven_arr)
    prime_list.textContent = array
    prime_even.textContent = prime_even_arr
    prime_noneven.textContent = prime_noneven_arr
    prime_count.textContent = String(array.length) 
    even_count.textContent =String(even_count1)
    noneven_count.textContent =String(noneven_count1)
}