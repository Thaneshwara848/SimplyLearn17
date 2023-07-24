class Demo4
{
    id;name;age;salary;desig;
    constructor(id,name,age,salary,desig)
    {
      this.id =id;
      this.name=name;
      this.age= age;
      this.salary= salary
      this.desig=desig;
    }
    display()
    {
        console.log("ID :"+this.id)
        console.log("NAME :"+this.name)
        console.log("Age:"+this.age)
        console.log("Salary :"+this.salary)
        console.log("Desig :"+this.desig)
        console.log("================")
    }
    mymethod(id,name,age,salary,desig)
    {
        console.log("ID :"+id)
        console.log("NAME :"+name)
        console.log("Age:"+age)
        console.log("Salary :"+salary)
        console.log("Desig :"+desig)
        console.log("================")
    }
}
var d4= new Demo4(100,"Thanesh",26,90000,"Trainer");
d4.display();
d4.mymethod(999,"Salam khan",50,95000,"Actor");
