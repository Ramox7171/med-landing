
import { SelectedPage } from '../../shared/types.helper';
import { medicalServices } from '../../shared/mock.data';
import { motion } from "framer-motion";
import "./Services.scss"
import * as strings from "../../shared/mock-content.strings.json"
import medImg from '/medserv.png';

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
        <div className="services__box">
        <div className="services__left-box">
        <motion.div
      className="services__list-box"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
      }}
    >
      <h2 className='services__list-title'>{strings.medicalListTitle}</h2>
      <ul className='services__list'>
        {medicalServices.map((service, index) => (
          <motion.li
            className='services__list-item'
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {service}
          </motion.li>
        ))}
      </ul>
    </motion.div>
        </div>
        <div className="services__right-box">
          <img src={medImg} alt='medical test image' className='services__image'/>
        </div>
        </div>
      </motion.div>



    </section>
  )
}

export default Services