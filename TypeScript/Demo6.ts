class Soniaya 
{
     site=2;
    scar ="BMW ";
    money=500000;
    constructor()
    {
        console.log("SITE :"+this.site)
        console.log(" CAR :"+this.scar);
        console.log(" MONEY :"+this.money)
    }
}
class Rahul  extends Soniaya
{
    car="BENZ";
    constructor()
    {
        super();
        console.log("================")
        console.log("SITE :"+this.site)
        console.log(" Rahul have :"+this.car  );
        console.log(" SONIY  have :"+this.scar  );
        console.log(" MONEY :"+this.money)
    }
}

var r = new Rahul();


