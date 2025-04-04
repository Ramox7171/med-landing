
import { SelectedPage } from '../../shared/types.helper'
import {motion} from "framer-motion";
import "./About.scss";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const About = ({setSelectedPage}: Props) => {
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
                <h2 className="about__heading"></h2>



            </motion.div>
    </section>
  )
}

export default About;