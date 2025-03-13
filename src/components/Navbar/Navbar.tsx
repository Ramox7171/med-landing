
import './Navbar.scss'
import { SelectedPage } from '../../shared/types.helper';
import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';


type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({isTopOfPage,selectedPage,setSelectedPage}:Props) => {


  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1265px)");



  return (
    <nav>Navbar</nav>
  )
}

export default Navbar