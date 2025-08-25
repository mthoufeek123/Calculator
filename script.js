// 1 to display number
function displaynumber(num){
    result.value+=num
}

function cleartext(){
    result.value=""
}

function lastDigit(){
    result.value=result.value.slice(0,-1)
}

function calculation(){
    result.value=eval(result.value)
}
