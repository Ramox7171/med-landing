import { ReactNode } from "react";
export enum SelectedPage {
    Home = "home",
    AboutUs= "aboutus",
    Medical = "medicalservices",
    Before = "beforevisit",
    Pricing = "pricing",
    Getting = "gettinghere",
    Contact = "contact",

    
  }


  export type TReason ={
    title: string;
    description: string;
    icon: ReactNode;
    id:number;
  }

 