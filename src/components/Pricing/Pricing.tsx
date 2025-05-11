import { SelectedPage } from "../../shared/types.helper";
import "./Pricing.scss";
import { motion } from "framer-motion";
import * as strings from "../../shared/mock-content.strings.json";
import talkingImg from "/talking.png";
import { pricingList } from "../../shared/mock.data";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Pricing = ({ setSelectedPage }: Props) => {
  return (
    <section id="pricing" className="pricing">
      <motion.div
        className="pricing__content"
        onViewportEnter={() => setSelectedPage(SelectedPage.Pricing)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className="pricing__heading">{strings.pricingWelcomeBig}</h2>
        <div className="pricing__box">
          <div className="pricing__first-box">
            <img src={talkingImg} alt="Consultation image" className="pricing__image" />
          </div>
          <div className="pricing__second-box">
            {pricingList.map((item, index) => (
              <div key={index} className="pricing__pricing-card">
                <h3>{item.title}</h3>
                <p>
                  {item.price} {item.currency}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
