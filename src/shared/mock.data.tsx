import { TpricingItem, TReason, TBeforeVisitItem, TAdress } from "./types.helper";
import {
  HeartIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { IdentificationIcon, CreditCardIcon, PhoneIcon } from "@heroicons/react/24/outline";

export const menuItemsEN: string[] = [
  "Home",
  "About Us",
  "Medical Services",
  "Before visit",
  "Pricing",
  "Getting here",
  "Contact",
];

export const menuItemsPL: string[] = [
  "Strona Główna",
  "O gabinecie",
  "Świadczenia medyczne",
  "Badania Medyczne",
  "dla pacjenta",
  "Cennik",
  "Dojazd",
  "Kontakt",
];

// Strona Główna
// O Gabinecie
// Świadczenia medyczne
// badania analityczne
// dla pacjenta
// cennik
// dojazd
// kontakt

export const reasons: TReason[] = [
  {
    id: 1,
    title: "Warm, family-like atmosphere",
    description:
      "Patients feel comfortable and welcome — our staff knows you by name, and your doctor truly knows you.",
    icon: <HeartIcon />,
  },
  {
    id: 2,
    title: "Personalized, long-term care",
    description: "We focus on building lasting relationships and tailoring treatment to your unique needs.",
    icon: <UserGroupIcon />,
  },
  {
    id: 3,
    title: "Easy scheduling and availability",
    description: "Flexible appointments, short waiting times, and accessible care when you need it most.",
    icon: <CalendarDaysIcon />,
  },
  {
    id: 4,
    title: "Clear communication and guidance",
    description: "We explain diagnoses and treatments in simple terms, so you always feel informed and confident.",
    icon: <ChatBubbleLeftRightIcon />,
  },
  {
    id: 5,
    title: "Trusted preventive care",
    description: "We emphasize prevention and early diagnosis to keep you healthy — not just treat illness.",
    icon: <ShieldCheckIcon />,
  },
  {
    id: 6,
    title: "Easily accessible location",
    description:
      "Our clinic is conveniently located with nearby parking and public transport options for your comfort.",
    icon: <MapPinIcon />,
  },
];

export const medicalServices: string[] = [
  "General check-up tests (morphology, ESR, urine)",
  "Kidney function tests (urea, creatinine, uric acid)",
  "Pancreas tests (diastase, glucose)",
  "Liver tests (bilirubin, transaminases, lipid profile)",
  "Tumor markers (Ca 19-9, PSA, Ca 125, Ca 15-3)",
  "ECG test (electrocardiography)",
  "Analytical control tests",
  "Blood pressure measurement",
  "Spirometry with printout",
  "Intramuscular injections",
  "Preventive vaccinations for children and adults",
  "Seasonal flu vaccinations",
  "Anti-allergy desensitization therapy",
];

export const pricingList: TpricingItem[] = [
  {
    title: "Standard Appointment (Mon-Fri):",
    price: 200,
    currency: "PLN",
  },
  {
    title: "Holiday Appointment:",
    price: 250,
    currency: "PLN",
  },
  {
    title: "Follow-up Visit",
    price: "100-150",
    currency: "PLN",
  },
  {
    title: "Online Consultation:",
    price: "100-150",
    currency: "PLN",
  },
];

export const beforeVisitInfo: TBeforeVisitItem[] = [
  {
    title: "Bring Insurance ID",
    description:
      "Although we are a private clinic, we have NFZ contracts for discounted prescriptions. Eligibility can be verified using your PESEL number.",
    icon: <IdentificationIcon className="before-visit__icon" />,
  },
  {
    title: "Payment Methods",
    description: "Payments for appointments, lab tests, and other services can be made by cash or credit/debit card.",
    icon: <CreditCardIcon className="before-visit__icon" />,
  },
  {
    title: "Emergency Numbers",
    description: (
      <ul className="before-visit__emergency-list">
        <li>
          Emergency (Mobile): <strong>112</strong>
        </li>
        <li>
          Ambulance: <strong>999</strong>
        </li>
        <li>
          Fire Department: <strong>998</strong>
        </li>
        <li>
          Police: <strong>997</strong>
        </li>
      </ul>
    ),
    icon: <PhoneIcon className="before-visit__icon" />,
  },
];

export const companyAdress: TAdress = {
  street: "Main St.",
  streetNumber: 123,
  city: "Sopot",
  district: "Centrum",
  country: "Poland",
  postalCode: "81-001",
};
