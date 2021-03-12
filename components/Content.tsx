import styles from '../styles/pages/Content.module.css';

interface contentProps {
    title: string,
}


export const Content: React.FC<contentProps> = ({ title }) => {
    return (
        <div className={styles.contentContainer}>
            <h4>{title}</h4>
            <div className={styles.homePageContent}>
                <h2>Layout Page with Next/Typescript</h2>
                <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsum perferendis qui, ab dolor praesentium!</strong>
                <img src="/images/ocean-energy.svg" alt="" />
            </div>
        </div>

    )
}