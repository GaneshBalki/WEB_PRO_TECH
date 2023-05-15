import express from "express";
let app=express()
app.set('views',"./views")
app.set('view engine','hbs')
import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.send("Helllo ky chalu ahe")
})
app.get('/calci', (req, res) => {
    const { num1 = 0, num2 = 0, num3 = 'sum' } = req.query;
  
    // Check if num1 and num2 are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      return res.send('Invalid input');
    }
  
    let result = 0;
    switch (num3) {
      case 'sub':
        result = parseInt(num1) - parseInt(num2);
        break;
      case 'sum':
        result = parseInt(num1) + parseInt(num2);
        break;
      default:
        return res.send('Invalid input');
    }
  
    res.render('calc', { result });
  });
  
app.listen(1317,()=>{
    console.log("Server is running on port 1317")
})