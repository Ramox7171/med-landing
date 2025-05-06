import { TReason } from "./types.helper";
import {
    HeartIcon,
    UserGroupIcon,
    CalendarDaysIcon,
    ChatBubbleLeftRightIcon,
    ShieldCheckIcon,
    MapPinIcon
  } from "@heroicons/react/24/solid";



export const menuItemsEN:string[] =
    ["Home", "About Us", "Medical Services", "Before visit",  "Pricing", "Getting here", "Contact"];


export const menuItemsPL:string[] = ["Strona Główna", "O gabinecie", "Świadczenia medyczne","Badania Medyczne","dla pacjenta", "Cennik","Dojazd","Kontakt"];





    // Strona Główna
    // O Gabinecie
    // Świadczenia medyczne
    // badania analityczne
    // dla pacjenta
    // cennik
    // dojazd
    // kontakt


    export const reasons:TReason[] = [
        {
          id: 1,
          title: "Warm, family-like atmosphere",
          description:
            "Patients feel comfortable and welcome — our staff knows you by name, and your doctor truly knows you.",
          icon: <HeartIcon  />,
        },
        {
          id: 2,
          title: "Personalized, long-term care",
          description:
            "We focus on building lasting relationships and tailoring treatment to your unique needs.",
          icon: <UserGroupIcon  />,
        },
        {
          id: 3,
          title: "Easy scheduling and availability",
          description:
            "Flexible appointments, short waiting times, and accessible care when you need it most.",
          icon: <CalendarDaysIcon  />,
        },
        {
          id: 4,
          title: "Clear communication and guidance",
          description:
            "We explain diagnoses and treatments in simple terms, so you always feel informed and confident.",
          icon: <ChatBubbleLeftRightIcon  />,
        },
        {
          id: 5,
          title: "Trusted preventive care",
          description:
            "We emphasize prevention and early diagnosis to keep you healthy — not just treat illness.",
          icon: <ShieldCheckIcon  />,
        },
        {
            id: 6,
            title: "Easily accessible location",
            description: "Our clinic is conveniently located with nearby parking and public transport options for your comfort.",
            icon: <MapPinIcon /> 
          }
      ];
    