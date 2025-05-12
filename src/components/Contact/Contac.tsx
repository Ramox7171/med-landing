import { SelectedPage } from "../../shared/types.helper";
import "./Contact.scss";
import { motion } from "framer-motion";
import * as strings from "../../shared/mock-content.strings.json";
import ImgCallDoctor from "/contact.png";

import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";
import ActionButton from "../../shared/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact__content"
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className="contact__heading">{strings.contactWelcomeBig}</h2>
        <div className="contact__box">
          <div className="contact__left-box">
            <img className="contact__image" alt="Calling doctor image" src={ImgCallDoctor} />
          </div>
          <div className="contact__right-box">
            <ul className="contact__info">
              <li>
                <MapPinIcon className="icon" />
                123 Main St, Sopot
              </li>
              <li>
                <PhoneIcon className="icon" />
                <a href="tel:+48123456789">+48 123 456 789</a>
              </li>
              <li>
                <EnvelopeIcon className="icon" />
                <a href="mailto:info@lorem.pl">info@lorem.pl</a>
              </li>
              <li>
                <ClockIcon className="icon" />
                Mon–Fri: 9:00–17:00
              </li>
            </ul>
            <div className="contact__socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v9h4v-9h3.5L19 9h-4V6a1 1 0 011-1h2V2z"
                  />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth={2}></rect>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                  />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" strokeWidth={2} />
                </svg>
              </a>
              <a href="/opinie" aria-label="Opinie lekarskie">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h6m-6 4h10M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H7l-2 4v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
            <ActionButton setSelectedPage={setSelectedPage} classes="conctact__cta">
              {strings.heroButtonEN}
            </ActionButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
