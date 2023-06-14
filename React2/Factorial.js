export default function Factorial(props){
    let numb=props.num
    var fact=1;
    for(let i=1;i<=numb;i++){
         fact=fact*i;
    }
    return(
        <div>
            Factorial of {numb} is {fact}
        </div>
    )
}