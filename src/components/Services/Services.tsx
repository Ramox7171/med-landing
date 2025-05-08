
import { SelectedPage } from '../../shared/types.helper';
import { motion } from "framer-motion";
import "./Services.scss"
import * as strings from "../../shared/mock-content.strings.json"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Services = ({setSelectedPage}: Props) => {
  return (
    <section id='medicalservices' className='services'>
        <motion.div
        className="services__content"
        onViewportEnter={() => setSelectedPage(SelectedPage.Medical)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className="services__heading">{strings.medicalWelcomeBig}</h2>
fdsdfsdfdf
      </motion.div>



    </section>
  )
}

export default Services