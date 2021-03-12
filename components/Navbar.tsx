import { useState } from 'react';
import styles from '../styles/pages/Navbar.module.css';


interface NavbarProps {
    instagram: string;
    facebook: string;
    twitter: string;
    linkedin: string;

}


export const Navbar: React.FC<NavbarProps> = ({ instagram, facebook, linkedin, twitter }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function openMenu() { isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true) }


    return (
        <nav className={styles.navContainer}>
            <img src="/images/nearsure-logo.svg" alt="" />
            <div className={styles.navItems} style={{ transform: isMenuOpen ? "translateY(0px)" : "" }}>
                <li><a href="">Home</a></li>
                <li><a href="">Sobre Nós</a></li>
                <li><a href="">Trabalhe Conosco</a></li>
                <li><a href="">Equipe</a></li>
                <li><a href="">Contato</a></li>

                <div>
                    {isMenuOpen ?
                        <div className={styles.navSocialMediaIcons}>
                            <a href={instagram} target="_blank"><img src="/images/icons/instagram.svg" alt="Instagram" /> <p>Instagram</p> </a>
                            <a href={facebook} target="_blank"><img src="/images/icons/facebook.svg" alt="Facebook" /> <p>Facebook</p> </a>
                            <a href={twitter} target="_blank"><img src="/images/icons/twitter.svg" alt="Twitter" /> <p>Twitter</p> </a>
                            <a href={linkedin} target="_blank" ><img src="/images/icons/linkedin.svg" alt="Linkedin" /> <p>Linkedin</p> </a>
                        </div> : " "
                    }
                </div>
            </div>



            <i
                onClick={() => {
                    openMenu()
                }}
                className={!isMenuOpen ? "fas fa-bars burger" : "fas fa-times"}>

            </i>
        </nav>
    )
}
