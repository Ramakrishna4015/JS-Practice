    //classes provide a way to create objects with methods and 
    //properties in a structured way
    //clases are written a PasacalCase (captitalize each word)
   /* class Human{
        address = "hyd";
            constructor (name,age){
                this.name = name;
                this.age = age;
            }
            greet(){
               console.log("my name is "+this.name);
               
                
            }

    }
      const Person2 = new Human('krk',30)
        // console.log(Person2.greet());
        class Student extends Human{
            constructor(name,grade){
                super(name);
                this.grade = grade;
            }
            study(){
                console.log("my grade is"+this.grade);
                
            }
        }
     
      const rk = new Student("krk",30,8)
      console.log(Human);
      console.log(Human.address);
      console.log(Person2.address);
      
      
      console.log(rk);
      rk.greet();
      rk.study();
    
      
    //  console.log(Human);
    

/* class Person{
//     constructor(name){ ///giving name to person
//         this.name= name; //

//     }
// }*/
//fucntions inside the classes treated as methods 



class Player{
    static player = "dravid";
    #speciality = "keeper";
    constructor(name,game){
            this.myname = name;
            this.mygame = game;
    }
    #PrintSpeaciality(){
        console.log(this.#speciality+"  rkkkkkk");
        
    }
    getSpeciality (){
        this.#PrintSpeaciality()
        return this.#speciality;
    }
    setSpeciality(speciality){
        if(speciality === ('finisher'|| 'captain')){
            return this.#speciality = speciality;
        }
    }
}

let Dhoni = new Player("MS DHONI","cricket")
console.log(Dhoni.mygame);
console.log(Dhoni.getSpeciality());///can be accesd due to get
Dhoni.setSpeciality('finisher');
console.log(Dhoni.getSpeciality());

console.log(Player.speciality);
console.log(Dhoni.player);
console.log(Player.player);
// Dhoni.PrintSpecilaity()


