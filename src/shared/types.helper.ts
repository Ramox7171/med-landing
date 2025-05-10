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

 