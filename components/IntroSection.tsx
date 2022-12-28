import styles from './IntroSection.module.css'
import Button from './Button'

export default function IntroSection () {
    function scrollToForm() {
        document?.querySelector('#portfolio')?.scrollIntoView({behavior: 'smooth'});
      }
    return (
        
        <div className={styles.container}>
            <h1>Hi, I'm <span style={{fontSize : 30, color : "#b6eafa"}}>Chae Hoon Kim</span></h1>
            <h1>I'm a <span style={{fontSize : 30, color : "#b6eafa"}}>Full Stack</span> developer</h1>
            <Button text = {'Go to My Workd'}onClick={scrollToForm}/>
            
        </div>
        
    )
}