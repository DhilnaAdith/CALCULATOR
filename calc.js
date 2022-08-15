//1. display numbers in text box

function displayNum(num)
{
result.value +=num
}

//2.clear content in text box

function clearBox()
{
    result.value=""
}

//3.evaluateExpression

function evaluateExpr()
{
    result.value=eval(result.value)
}


//4. remove last item from textbox

function removeItem()
{
  curExpr=result.value
  result.value=curExpr.slice(0,-1)
}