
import { SelectedPage } from '../../shared/types.helper';
import "./GettingHere.scss";
import { motion } from "framer-motion";
import * as strings from "../../shared/mock-content.strings.json";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const GettingHere = ({setSelectedPage}: Props) => {
  return (
    <section id='getting-here' className='getting-here'>
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
        <h2 className='getting-here__heading'>{strings.gettingHereWelcomeBig}</h2>
        <div className='getting-here__box'>
            <div className='getting-here__left-box'></div>
            <div className='getting-here__right-box'></div>
        </div>
        

      </motion.div>

    </section>
  )
}

export default GettingHere;