export class Product {
  id: number;
  name: string;
  price: number;
  offer: boolean;
  priceOffer: string;
  image: string;

  constructor(
    id: number,
    name: string,
    price: number,
    offer: boolean,
    priceOffer: string,
    image: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.offer = offer;
    this.priceOffer = priceOffer;
    this.image = image;
  }
}