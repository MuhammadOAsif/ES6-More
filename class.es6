/*class Support {
  name = "asifSheikh";
  roll = 12;
  adress = "kushumbag";
  school = "kalibari";
  protidinPoralekhaKora() {
    console.log(protidinPoralekhaKora);
  }
}
const asif = new Support();
console.log(asif);

class Ten {
  name = "ten";
  position = "6 tala bilding er 2 talai thake";
  adress = "dokhin gaw 2no road 3 no Bari";
  protishthandata = "Tajauddin ahommed";
  tajauddin() {
    console.log(tajauddin);
  }
}
const school = new Ten();
console.log(school);
*/
class familly {
  name;
  famillyMember = ["Asif", "Rasel", "Adnan", "Arjina", "Anis"];
  famillyBackground = "koshai bongsho";
  famillyPersonNumber = 5;
  famillyMonthlyIncome = 15000;
  constructor(name) {
    this.name = name;
  }
  forFamilly() {
    console.log("Play game");
  }
}
const familys = new familly("rasel");
const familys1 = new familly("shakib");
console.log(familys, familys1);
familys.forFamilly();

class Support {
  name;
  designation = "Support Web Dev";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  startSession() {
    console.log(this.name, "start a support session");
  }
}

const aamir = new Support("Aamir Khan", "BD");
const salman = new Support("Solaiman Khan", "Dubai");
const sharuk = new Support("SRK Khan", "Dubai");
const akshay = new Support("Akshay Kumar", "Dubai");
aamir.startSession();
salman.startSession();
console.log(aamir, salman, sharuk, akshay);
// console.log(salman);



class Practice
{
  name;
  roll = 23;
  class = "web development";
  time = 23333;
  year = 6;
  corseTime = "Only 6 month"
  constructor( name )
  {
    this.name = name;
  }
  corses ()
  {
    console.log(this.name,"Ami Ei Corse A Onek Koshto korte chai");
  }
}
const shomoy = new Practice('asif');
shomoy.corses();
console.log(shomoy);



