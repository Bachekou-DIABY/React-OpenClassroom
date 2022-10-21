import '../styles/Banner.css'
import logo from '../assets/logo.png'
function Banner() {
    const title = 'La maison jungle'

return (
        <div className='lmj-banner'>
            <img src={logo} alt="lmj" className='lmj-logo'></img>
            <h1>La maison jungle</h1>
        </div>
    )
}

export default Banner
