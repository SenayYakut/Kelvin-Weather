// store the kelvin value in a variable
const kelvin = 293;
// celcius value
const celsius = kelvin - 273;
//fahrenheit value
// Convert to Newton
 
// Round down
let fahrenheit = celsius * (9 / 5) + 32;

fahrenheit = Math.floor(fahrenheit);

// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

 
console.log(`The temperature is ${newton} degrees Newton.`);