import styles from '../styles/pages/Footer.module.css';

interface FooterProps {
    instagram: string;
    facebook: string;
    twitter: string;
    linkedin: string;
}

export const Footer: React.FC<FooterProps> = ({instagram, facebook, linkedin, twitter}) => {
    return (

        <footer className={styles.footerContainer} >
            <div className={styles.mainFooter}>

                <div className={styles.footerColunm}>
                    <li><a href="">Início</a></li>
                    <li><a href="">Sobre nós</a></li>
                    <li><a href="">Contato</a></li>
                    <li><a href="">Equipe</a></li>
                    <li><a href="">Trabalhe conosco</a></li>
                </div>
                <div className={styles.footerColunm}>
                    <li><a href={instagram} target="_blank"><img src="/images/icons/instagram.svg" alt="Instagram" />Instagram</a></li>
                    <li><a href={facebook} target="_blank"><img src="/images/icons/facebook.svg" alt="Facebook" />Facebook</a></li>
                    <li><a href={twitter} target="_blank"><img src="/images/icons/twitter.svg" alt="Twitter" />Twitter</a></li>
                    <li><a href={linkedin} target="_blank"><img src="/images/icons/linkedin.svg" alt="Linkedin" />Linkedin</a></li>
                </div>

            </div> 
            <div className={styles.footerRow}>
                <hr />
                <li><strong>© 2021 Gabruel Necessitas de emprego. É sério.</strong></li>
            </div>
        </footer>

    )
}

