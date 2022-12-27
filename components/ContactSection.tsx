import styles from './ContactSection.module.css'
import Button from './Button'

export default function ContactSection () {
    return (
        <div className={styles.container}>
            <h1>This is a Contact Section</h1>
            <Button text = {'Send Email'}/>
        </div>
    )
}