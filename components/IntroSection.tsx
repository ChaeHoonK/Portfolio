import styles from './IntroSection.module.css'
import Button from './Button'

export default function IntroSection () {
    function scrollToForm() {
        document?.querySelector('#portfolio')?.scrollIntoView({behavior: 'smooth'});
      }
    return (
        <div className={styles.container}>
            <h1>Hi, I'm Chae Hoon Kim</h1>
            <h1>I'm a full stack developer</h1>
            <Button text = {'Go to My Workd'}onClick={scrollToForm}/>
        </div>
    )
}