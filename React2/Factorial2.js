export default function Factorial2(props){
    let n=props.num;
    let fact=1;
    for(let i=1;i<=n;i++){
        fact=fact*i;
   }
    return(
        <div>
            Factorial of new  {n} is {fact}
        </div>
    )
}