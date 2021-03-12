import styles from '../styles/pages/Footer2.module.css';

export const Footer2 = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.footerRow}>
                    <div className={styles.footerCol}>
                        <h4>Ocean Tech</h4>
                        <ul>
                            <li><a href="">Sobre nós</a></li>
                            <li><a href="">Nossos serviços</a></li>
                            <li><a href="">Contato</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerCol}>
                        <h4>Projetos</h4>
                        <ul>
                            <li><a href="">Ocean ERP</a></li>
                            <li><a href="">Ocean investimentos</a></li>
                            <li><a href="">Ocean Ocean</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerCol}>
                        <h4>Social Media</h4>
                        <div className={styles.footerColSocial}>
                            <ul>
                                <li><a href=""><i className="fab fa-instagram"></i></a></li>
                                <li><a href=""><i className="fab fa-facebook"></i></a></li>
                                <li><a href=""><i className="fab fa-twitter"></i></a></li>
                                <li><a href=""><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}