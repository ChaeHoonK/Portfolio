import styles from './IntroSection.module.css'
import Button from './Button'

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function IntroSection () {
    function scrollToForm() {
        document?.querySelector('#portfolio')?.scrollIntoView({behavior: 'smooth'});
      }
    
      const [ref, observer] = useIntersectionObserver((entries : any) => {
        entries.forEach((entry : any) => {
            if (entry.intersectionRatio > 0) {
            entry.target.style.transition = 'opacity 3s';
            entry.target.style.opacity = 1;
          } else {
            entry.target.style.opacity = 0;
          }
        });
      });

    return (
        
        <div className={styles.container} ref = {ref} style = {{opacity:'0'}}>
            <h1>{`Hi, I'm`} <span>Chae Hoon Kim</span></h1>
            <h1>{`I'm a`} <span >Full Stack</span> developer</h1>
            <Button style={{color:'white', border:'2px solid white'}} text = {'Go to My Works'}onClick={scrollToForm}/>
            
        </div>
        
    )
}