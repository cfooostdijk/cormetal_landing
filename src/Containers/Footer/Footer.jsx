import { Copyright, Contact, Socials, Map } from '../../Components'
import '../styles/Footer.sass'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-layout'>
        <Map />
        <Contact />
        <Socials />
        <Copyright />
      </div>
    </div>
  )
}

export default Footer
