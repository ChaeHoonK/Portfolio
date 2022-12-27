import styles from './PortfolioSection.module.css'

export default function PortfolioSection () {
    function scrollToForm() {
        document?.querySelector('#portfolio')?.scrollIntoView({behavior: 'smooth'});
      }
    return (
        <div className={styles.container}>
            <h1>This is portfolio Section</h1>
            
        </div>
    )
}