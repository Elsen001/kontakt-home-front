export interface DataItems  {
  id: number;
  name:string;
};


export interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  brand: string;
  price: number;
  oldPrice: number;
  qty: number;
  totalPrice: number;
}


export interface Features {
  [key: string]: string | undefined;
  kamera: string;
  ekran: string;
  hafiza: string;
  islemci: string;
  pil: string;
  sarj: string;
  renk: string;
  isletimSistemi: string;
  suyaDayaniklilik: string;
  agirlik: string;
  ekranCozunurluk: string;
  parmakIzi: string;
  ses: string;
  baglanti: string;
  kameraOzellikleri: string;
  videoKayit: string;
  guvenlik: string;
  materyal: string;
  bataryaOmru: string;
  kutuIcerigi: string;
  ekranTeknolojisi: string;
  kameraYazilimi: string;
  oyunPerformansi: string;
  cozunurluk: string;
  hiz: string;
  depolamaSecenekleri: string;
  kameraSensoru: string;
  videoOzellikleri2: string; 
  diger: string;
  ekstra?: string;
}
export interface OfferItems {
  id: number;
  name: string;
  description: string;
  image: any;
  brand: string;
  price: number;
  oldPrice: number;
  model: string;
  color: string;
  category: string;
  discount: number;
  features?: Features;
}

export interface CommentType {
  _id?: string;
  productId: string;
  userName: string;
  commentText: string;
  starRating: number;
  createdAt: string;
}

export interface CartItem extends OfferItems {
  id: number;
  name: string;
  description: string
  image: any;
  brand: string;
  price: number;
  oldPrice:number;
  model: string;
  color: string;
  category: string;
  discount: number;
  qty: number;
  totalPrice: number;
  
}


export interface ImportedRootState {
  categoryItems: {
    categoryItems: {
      categories: DataItems[];
    };
  };
 
  productOffer: {
    productOffer: {
      data: OfferItems[]
    };
  };
}
