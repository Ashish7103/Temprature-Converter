const input=document.querySelector('.input_temp')
var select1 =document.querySelector("#select1")
var select2 =document.querySelector("#select2")



// input
const standard1F=document.querySelector('.standard__1__F')
const standard1C=document.querySelector('.standard__1__C')

// output 
const standard2F=document.querySelector('.standard__2__F')
const standard2C=document.querySelector('.standard__2__C')
const output=document.querySelector('.output_temp')


const buttonToConvert=document.querySelector('.buttonToConvert')


/////////////////////////////////////////////////////////////////
// functioning




const toCelcius=function(temp){
    return eval(`(5/9)*(${temp}-32)`)+'°C'
}

// console.log(input.value==10)


const toFahrenheit=function(temp){
    return eval(`(${temp}*(9/5))+32`)+'°F'
}







const tempconverter=buttonToConvert.addEventListener('click',function(){

    var inp=input.value;

// box 1 selected
    var value1=select1.value;
    var text1=select1.options[select1.selectedIndex].text;
    console.log(value1,text1);

// box 2 selected

    var value2=select2.value;
    var text2=select2.options[select2.selectedIndex].text;
    console.log(value2,text2);
    
    

    if(text1=='°C' && text2=='°F'){
        
       
       output.value=parseFloat(toFahrenheit(inp)).toFixed(2)+'°F';   
    }
   else if(text1=='°F' && text2=='°C' ){
       output.value=parseFloat(toCelcius(inp)).toFixed(2) +'°C'      
    }
    else{
        output.value=" Invalid Selection of Standard"
    }

})


