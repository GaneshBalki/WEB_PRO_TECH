

export default function Child({num1,num2,f1}){
   
    let res=0
    function handler(e)
    {
         let choice=e.target.value
         let n1=parseInt(num1)
         let n2=parseInt(num2)
    
         switch(choice)
         {
           case "Add": res = n1 + n2;break;
           case "Sub": res = n1 - n2;break;
           case "Mult": res = n1 * n2;break;
           case "Div": res = n1 / n2;break;
           default : res="Null"
        }
        
        f1(res)
    }

    return(
        <div>
            <select onChange={handler}>
                <option value="">Select</option>
                <option value="Add">Addition</option>
                <option value="Sub">Substration</option>
                <option value="Mult">Multiplication</option>
                <option value="Div">Division</option>
            </select>
        </div>
    )
}