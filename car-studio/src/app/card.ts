export class card{
  image: string;
  name: string;
  price: number;
  year: number;

  constructor(image:string, name:string, price:number, year:number){
    this.image=image;
    this.name=name;
    this.price=price;
    this.year=year;
  }
}
