import style from './Navbar.module.css'

export default function Navbar () {
    return (
        <div className = {style.navbar}>
            <div className = {style.buttonGroup}>
                 <a href='#info'><button className = {style.navbarMenu}>Home</button></a>
                 <a href='#about'><button className = {style.navbarMenu}>About</button></a>
                <a href = "#portfolio"><button className = {style.navbarMenu}>Portfolio</button></a>
                <button className = {style.navbarMenu}>Contact</button>
            </div>
        </div>
    )
}