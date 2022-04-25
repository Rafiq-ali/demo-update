
let sum  = async(req,res) =>{
  
    console.log("Welcome to Node JS")
    res.send({"Result":`sum is ${2+2}`})


};
let calc=async(req,res)=>{
    console.log(req.body)
   /* switch(req.body.op)
    {
        case "+": res.send(`${req.body.value1+req.body.value2}`);break
        case "-": res.send(`${req.body.value1-req.body.value2}`);break
        case "*": res.send(`${req.body.value1*req.body.value2}`);break
        case "/": res.send(`${req.body.value1/req.body.value2}`);break
        case "%": res.send(`${req.body.value1%req.body.value2}`);break
        default:
    }*/
   let out=opselect(req.body.op,req.body.value1,req.body.value2)
   res.send(`${out}`)
}
 function opselect(op,value1,value2)
    {
        if(op =="+") 
        return value1+value2
        if(op =="-")
        return value1-value2
        if(op =="*")
        return value1*value2
        if(op =="/")
        return value1/value2
        if(op =="%")
        return value1%value2
    }
let prime=async(req,res)=>{
    console.log(req.body)
    let pm1=pm(req.body.num);
    res.send(pm1)
}
let user =async(req,res)=>{
console.log(req.body)
res.send({"result":"req received"})
req.end()
}
function pm(n)
{
    let key=true;
    let i=2;
    while(i<n)
    {
        if(n%i==0 && i!=n)
        key=false
        i++
    }
    if(key)
    return "prime"
    else
    return "not a prime"
}
let oddeven=async(req,res)=>{
    let out=evenorodd(req.body.num)
    res.send(out)
}
function evenorodd(n)
{
    if(n%2==0)
    return "even"
    else
    return "odd"
}


module.exports={
    sum
    ,user,
    calc,
    prime,
    oddeven
}
