
import { SelectedPage } from '../../shared/types.helper';
import { motion } from "framer-motion";
import useMediaQuery from '../../hooks/useMediaQuery';
import * as strings from "../../shared/mock-content.strings.json";
import doctor from "/doctor-circle.png";
import "./Home.scss"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1265px)");


    return (
        <section id="home" className="home">


            <motion.div
                className="home__box"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
               <div className="home__content">
                <h2 className="home__welcome--big"
                >{strings.welcomeBig}</h2>
                <h2 className="home__welcome--color">
                    {strings.welcomeBigColor}</h2>
                <div className="home__cta">
                <button className="home__button">{strings.homeButton}</button>
                <button className="home__button--transparent">{strings.homeCTA}</button>
                

                </div>
                <div className="home__info-box">

                <h2 className="home__info-text">{strings.homeInfoBlue}</h2>
                <h2 className="home__info-text--red">{strings.homeInfoRed}</h2>
                </div>
                

               </div>
               <div className="home__image">
                <img src={doctor} alt="doctor image rounded" />
               </div>


            </motion.div>

        </section>

    )
}

export default Home