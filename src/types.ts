export type Rating = {
  rate: number;
  count: number;
};
export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
};
//인터페이스는 유니온이 안 되고 타입은 유니온 처리 가능
