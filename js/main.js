let btn =document.querySelector(".button"),
   curroncyFrom = document.querySelector(".currancy-from"),
   curroncyTo = document.querySelector(".currancy-to"),
   result=document.querySelector(".res"),
   from,
   to;









btn.addEventListener("click" , ()=>{
   fetch("https://api.currencyfreaks.com/latest?apikey=dffc0675950a466e95c579850072e488&")
   .then(e=>{
      return e.json()
   })
   .then(e=>{

      from= e.rates[curroncyFrom.value]
      to= e.rates[curroncyTo.value]
      result.innerHTML=`{ 1 } of 
      ${curroncyFrom.value} Equal { <span class="value"> ${+(to/from).toFixed(3)}  </span>}From ${curroncyTo.value}`
      
      document.querySelector(".nameFrom").innerHTML=curroncyFrom.value
      document.querySelector(".nameTo").innerHTML=curroncyTo.value
   })
   

   
   
})






