import { SelectedPage } from "../../shared/types.helper";
import "./GettingHere.scss";
import { motion } from "framer-motion";
import * as strings from "../../shared/mock-content.strings.json";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const GettingHere = ({ setSelectedPage }: Props) => {
  return (
    <section id="getting-here" className="getting-here">
      <motion.div
        className="getting-here__content"
        onViewportEnter={() => setSelectedPage(SelectedPage.Getting)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className="getting-here__heading">{strings.gettingHereWelcomeBig}</h2>
        <div className="getting-here__box">
          <div className="getting-here__left-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2320.252027571981!2d18.560384277365564!3d54.44083799227047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd0a911e5ec987%3A0x354e406002ed2669!2sSopot%20Centrum!5e0!3m2!1spl!2spl!4v1746999948342!5m2!1spl!2spl"
              width="600"
              height="450"
              style={{ border: "0" }} 
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="getting-here__right-box">
            <h3>Some Address in Sopot Centrum</h3>
            <p>123 Main Street, Sopot Centrum, 81-001 Sopot, Poland</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GettingHere;
