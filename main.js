let btn =document.querySelector(".button"),
   curroncyFrom = document.querySelector(".currancy-from"),
   curroncyTo = document.querySelector(".currancy-to"),
   result=document.querySelector(".res");

btn.addEventListener("click" , ()=>{
   fetch("https://api.currencyfreaks.com/latest?apikey=dffc0675950a466e95c579850072e488&")
   .then(e=>{
      return e.json()
   })
   .then(e=>{
      let from= e.rates[curroncyFrom.value]
      let to= e.rates[curroncyTo.value]
      result.innerHTML=`{ 1 } of 
      ${curroncyFrom.value} Equal {  ${+(to/from).toFixed(3)}  }From ${curroncyTo.value}`
   })
})
