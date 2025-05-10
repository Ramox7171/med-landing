
import { SelectedPage } from '../../shared/types.helper';
import "./Contact.scss";
import { motion } from "framer-motion";
import * as strings from "../../shared/mock-content.strings.json";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contact = ({setSelectedPage}: Props) => {
  return (
    <section id='contact' className='contact'>
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
        <h2 className='contact__heading'>{strings.contactWelcomeBig}</h2>
        <div className='contact__box'>
            <div className='contact__left-box'></div>
            <div className='contact__right-box'></div>
        </div>
        

      </motion.div>

    </section>
  )
}

export default Contact;