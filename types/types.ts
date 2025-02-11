export type ItemType = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: string;
    marque: string;
    currency: string;
};


export type SlideType = {
    id: number;
    image: string;
  };


export type MenuData = {
  id: number;
  name: string;
  url: string;
  subMenu?: MenuData[];
};

export type Social = {
    id: number;
    name: string;
    url: string;
    icon: React.JSX.Element;
  }[];