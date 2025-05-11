import { ReactNode } from "react";
export enum SelectedPage {
  Home = "home",
  AboutUs = "about-us",
  Medical = "medical-services",
  Before = "before-visit",
  Pricing = "pricing",
  Getting = "getting-here",
  Contact = "contact",
}



  export type TReason ={
    title: string;
    description: string;
    icon: ReactNode;
    id:number;
  }


  export type TpricingItem = {
    title: string;
    price: string | number;
    currency: string;
  }


  export type TBeforeVisitItem = {
    title: string;
    description: string | ReactNode;
    icon: ReactNode;
  };


  export type TAdress = {

    street: string;
    streetNumber:number;
    city: string;
    district: string;
    country: string;
    postalCode: string;
  }

 