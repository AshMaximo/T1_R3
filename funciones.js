function ageCalculator(){
    var añoActual=parseInt(new Date().getFullYear())

    document.write(añoActual)
    var naciAño= parseInt(prompt("Dime tu año de nacimiento"))
     
    alert(añoActual - naciAño)
    alert(añoActual - naciAño - 1)
}
function snacksCalculator(){
    var age=parseInt(prompt("Dime tu edad"))
    var death=parseInt(prompt("Dime tu edad de morision"))
    var cantidad=parseInt(prompt("Cuantos snaks comes al dia"))
    var añosVida= death - age
    console.log(añosVida)
    var diasVida= añosVida * 365
    console.log(diasVida)
    var snacksVida= diasVida*cantidad
    alert(snacksVida)
}
function radiusCalculator(){
    var radius=parseInt(prompt("Dime el radio"))
    var circumference = 2 * Math.PI * radius
    console.log("The circumference is " + circumference.toFixed())
    var area = Math.PI * Math.pow(radius, 2)
    console.log("The area is "+ area.toFixed())
}
function convertTemperature(){
    var celsius=parseInt(prompt("Dime la temperatura"))
    var fahrenheit = (celsius * 9/5) + 32
    console.log(celsius + "°C is " + fahrenheit.toFixed(2) + "°F")
    var celsius2 = (fahrenheit - 32) * 5/9
    console.log(fahrenheit + "°F is " + celsius2.toFixed(2) + "°C")
}