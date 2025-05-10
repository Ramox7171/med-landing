
import { SelectedPage } from '../../shared/types.helper';
import "./Pricing.scss";
import { motion } from "framer-motion";
import * as strings from "../../shared/mock-content.strings.json";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Pricing = ({setSelectedPage}: Props) => {
  return (
    <section id='pricing' className='pricing'>
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
        <h2 className='pricing__heading'>{strings.pricingWelcomeBig}</h2>
        <div className='pricing__box'>
            <div className='pricing__left-box'></div>
            <div className='pricing__right-box'></div>
        </div>
        

      </motion.div>

    </section>
  )
}

export default Pricing