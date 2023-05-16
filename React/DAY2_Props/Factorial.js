export default function Factorial(props)
{
    let a=props.num
    let fact=1
    for(var i=1;i<=a;i++)
    {
        fact=fact*i
    }
    return <div>
        Factorial of {a} is {fact}
    </div>
}