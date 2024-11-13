let buttons = document.getElementsByTagName('button');
let result = document.getElementById('result');

for(let i=0;i<buttons.length;i++)
{
    buttons[i].onclick=function(){
        let input = this.innerText;
        updateDisplay(input)
    };
}
function updateDisplay(input){
    let currentDisplay=result.innerText;
    if(currentDisplay === "0"){
        if(input!=="C"&& input!=="DEL"&& input!=="=")
        {
            result.innerText="";
            result.innerText+=input;
        }
    }
    else{
        if(input==="DEL"){
            result.innerText = currentDisplay.substring(0,currentDisplay.length-1) || "0";
        }
        else if(input === "C")
        {
            result.innerText="0"
        }
        else if(input !== "=")
        {
            result.innerText+=input
        }
        else if(input === "=")
        {
            try{
                let expression = result.innerText;
                expression = expression.replace(/(\d+(\.\d+)?)%/g, (match,number) => `${number / 100}`);
                result.innerText=eval(expression);
            }
            catch(error){
                result.innerText = "Error";
            }
        }
    }
}