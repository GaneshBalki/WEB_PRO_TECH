
export default function Factorial2(){
    

    function handler(){
        let x=document.getElementById("num").value
        let fact=1
        console.log(x)
        for(var i=1;i<=x;i++)
        {
          fact=fact*i
        }
        document.getElementById("p1").innerHTML=fact
    }

    return (
        <div>
            <label>Enter a Number</label>
            <input type="number" id="num"/>
            <button onClick={handler}>Factorial</button>
            <p id="p1"></p>
        </div>
    )
}