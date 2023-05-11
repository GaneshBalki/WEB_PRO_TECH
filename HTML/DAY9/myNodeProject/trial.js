class trial{
    static data1="IET"
    data2="Cdac"
    show(){
        console.log(trial.data1,this.data2)
    }
   static show2(){
        console.log(trial.data1,this.data2)
    }
}
let obj=new trial()   //creating the object of class
 obj.show()           //calling the function of object
 console.log(obj.data1) // this static variable data1 can not be called directly by object need to call from function of that class

 console.log("---This is static function---")
 // static function call using clas nae
trial.show2()    //static function cannot access nonstatic variables
 console.log("-----------------------------")

