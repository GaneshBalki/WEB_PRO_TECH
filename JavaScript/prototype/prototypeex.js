function MathsUtil(num1)
{  this.value = num1
    this.cube=()=>{
        console.log("cube=",this.value*this.value*this.value)
    }
}
function MathsProto()
{    this.square=(x)=>{
        console.log("square is ",x*x)
    }
}

function MathsProto2()
{
    this.power=(a,b)=>
    {
        console.log(Math.pow(a,b))
    }
}
function MathsFour()
{
    this.fourth=(a)=>{
        console.log.apply(a*a*a*a)
    }
}

//PROTOTYPE chaining -----
MathsProto2.prototype= new MathsFour()
MathsProto.prototype = new MathsProto2()
MathsUtil.prototype = new MathsProto()
let x = new MathsUtil(3)
x.cube()
x.square(4)
x.power(2,3)
x.fourth(2)
console.log("x=",x)
console.log("prototype of x=",Object.getPrototypeOf(x))





