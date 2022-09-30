DAY 6:
1ST Q=https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
  class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(){
    return this.rating;
}
}  
var film = new Movie("Casino Royale","Eon Productions","PG13");
console.log(film.getPG());


2nd Q=https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class Circle{
  constructor(radius,color){
    this.radius=radius;
    this.color=color;
  }
  getRadius(){
    return this.double;
  }
}
var round = new Circle("double","string");
console.log(round.getRadius());


3rd Q=Write a “person” class to hold all the details.

class Person{
constructor(name,color,place){
  this.name=name;
  this.color=color;
  this.place=place;
}
getQualification(){
  return this.engineering;
}
}
var identity=new Person("siva","white","coimbatore");
console.log(identity.getQualification());


4th Q=write a class to calculate the uber price.
class Uber{
  construtor(price,km){
    this.price=price;
    this.km=km;
  }
  uber(){
  return this.price*this.km;
  }
}
var result=new uber(10,1);
console.log(result.uber());