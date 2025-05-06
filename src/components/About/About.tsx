import { SelectedPage } from "../../shared/types.helper";
import { motion } from "framer-motion";
import { reasons } from "../../shared/mock.data";

import * as strings from "../../shared/mock-content.strings.json";
import "./About.scss";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutus" className="about">
      <motion.div
        className="about__content"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className="about__heading">{strings.aboutWelcomeBig}</h2>
        <div className="about__reasons-box">
          <div className="about__reasons-column">
            {reasons.slice(0, Math.ceil(reasons.length / 2)).map((reason) => (
              <div key={reason.id} className="about__reason-item">
                <div className="about__reasons-icon">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
          <div className="about__reasons-column">
            {reasons.slice(Math.ceil(reasons.length / 2)).map((reason) => (
              <div key={reason.id} className="about__reason-item">
                <div className="about__reasons-icon">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
