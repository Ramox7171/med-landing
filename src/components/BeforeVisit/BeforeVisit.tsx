import { SelectedPage } from "../../shared/types.helper";
import "./BeforeVisit.scss";
import { motion } from "framer-motion";
import * as strings from "../../shared/mock-content.strings.json";
import { beforeVisitInfo } from "../../shared/mock.data";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const BeforeVisit = ({ setSelectedPage }: Props) => {
  return (
    <section id="before-visit" className="before-visit">
      <motion.div
        className="before-visit__content"
        onViewportEnter={() => setSelectedPage(SelectedPage.Before)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className="before-visit__heading">{strings.beforeVisitWelcomeBig}</h2>
        <div className="before-visit__box">
          {beforeVisitInfo.map((item, index) => {
            return (
              <div key={index} className="before-visit__card">
                {item.icon}
                <h3>{item.title}</h3>
                <div className="before-visit__description">{item.description}</div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default BeforeVisit;
