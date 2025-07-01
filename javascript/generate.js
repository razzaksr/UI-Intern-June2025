const add = () => {
    const text = document.getElementById("product")
    var prices = document.getElementById("items")
    const elem = document.createElement("li")
    elem.innerHTML=text.value
    prices.appendChild(elem)
}
const calculate = () =>{
    var prices = document.getElementById("items").children
    var total = 0
    var bill = ""
    for(var index = 0; index < prices.length; index++){
        total += Number(prices[index].innerHTML)
    }
    bill = "Total Cost "+total
    bill += "<br/>GST 18% "+(total*0.180)
    total += (total*0.180)
    var out = document.getElementById("invoice")
    bill += "<br/>Net payable "+total
    out.innerHTML = bill
}