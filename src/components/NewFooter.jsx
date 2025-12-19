import linkedinLogo from '../assets/linkedn_logo.png'
import fbLogo from '../assets/fb_logo.png'
import youtubeLogo from '../assets/yb_logo.png'
import instaLogo from '../assets/ints_logo.png'

const NewFooter = () => {
  return (
    <div className="footer">
      <div className="footer-outer-box">
        <div className="footer-box">
          <div className="footer-left" style={{lineHeight: '1.2'}}>
            <div className="footer-title" style={{marginBottom: '0'}}>HOPE3</div>
            <div className="footer-address" style={{marginBottom: '0', marginTop: '0'}}>
              Sammamish, WA - 98074
            </div>
            <a href="mailto:contact@hope3.org" className="footer-email" style={{marginTop: '0'}}>
              contact@hope3.org
            </a>
            <div className="social-links">
               <img src={linkedinLogo} alt="LinkedIn" />
               <img src={fbLogo} alt="Facebook" />
              <img src={youtubeLogo} alt="Youtube" />
               <img src={instaLogo} alt="Instagram" />
            </div>
          </div>
          <div className="footer-right" style={{lineHeight: '1.2'}}>
            <div className="footer-nonprofit" style={{marginBottom: '0'}}>
              US IRS 501(C)(3) Non-Profit Organization
            </div>
            <div className="footer-ein" style={{marginBottom: '0', marginTop: '0'}}>
              ID: EIN 94-3184861
            </div>
            <div className="footer-copyright" style={{marginBottom: '0', marginTop: '0'}}>
              © 2024 All Rights Reserved      |  Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewFooter