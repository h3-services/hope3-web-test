import linkedinLogo from '../assets/footer_logo/linkedin-removebg-preview.png'
import fbLogo from '../assets/footer_logo/facebook-removebg-preview.png'
import youtubeLogo from '../assets/footer_logo/youtube-removebg-preview.png'
import instaLogo from '../assets/footer_logo/instagram-removebg-preview.png'
import twitter from '../assets/footer_logo/twitter-removebg-preview.png'
// import '../styles/NewFooter.css'

const NewFooter = () => {
  return (
    <div className="footer">
      <div className="footer-outer-box">
        <div className="footer-box">
          <div className="footer-left" style={{ lineHeight: '1.2' }}>
            <div className="footer-title" style={{ marginBottom: '0' }}>HOPE3 FOUNDATION</div>
            <div className="footer-address" style={{ marginBottom: '0', marginTop: '0' }}>
              Sammamish, WA - 98074
            </div>
            <a href="mailto:contact@hope3.org" className="footer-email" style={{ marginTop: '0' }}>
              contact@hope3.org
            </a>
            <div className="social-links" style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
              <img src={linkedinLogo} alt="LinkedIn" style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'contain' }} />
              <img src={fbLogo} alt="Facebook" style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'contain' }} />
              <img src={youtubeLogo} alt="Youtube" style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'contain' }} />
              <img src={instaLogo} alt="Instagram" style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'contain' }} />
              <img src={twitter} alt="Twitter" style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'contain' }} />
            </div>
          </div>
          <div className="footer-right" style={{ lineHeight: '1.2' }}>
            <div className="footer-nonprofit" style={{ marginBottom: '0' }}>
              US IRS 501(C)(3) Non-Profit Organization
            </div>
            <div className="footer-ein" style={{ marginBottom: '0', marginTop: '0' }}>
              ID: EIN 94-3184861
            </div>
            <div className="footer-copyright" style={{ marginBottom: '0', marginTop: '0' }}>
              © 2024 All Rights Reserved      |  Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewFooter



// import linkedinLogo from '../assets/footer_logo/linkedin-removebg-preview.png'
// import fbLogo from '../assets/footer_logo/facebook-removebg-preview.png'
// import youtubeLogo from '../assets/footer_logo/youtube-removebg-preview.png'
// import instaLogo from '../assets/footer_logo/instagram-removebg-preview.png'
// import twitter from '../assets/footer_logo/twitter-removebg-preview.png'
// import '../styles/NewFooter.css'

// const NewFooter = () => {
//   return (
//     <div className="footer">
//       <div className="footer-outer-box">
//         <div className="footer-box">
//           <div className="footer-left" style={{ lineHeight: '1.2' }}>
//             <div className="footer-title" style={{ marginBottom: '0' }}>HOPE3 FOUNDATION</div>
//             <div className="footer-address" style={{ marginBottom: '0', marginTop: '0' }}>
//               Sammamish, WA - 98074
//             </div>
//             <a href="mailto:contact@hope3.org" className="footer-email" style={{ marginTop: '0' }}>
//               contact@hope3.org
//             </a>
//             <div className="social-links" style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
//               <img src={linkedinLogo} alt="LinkedIn" style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'contain' }} />
//               <img src={fbLogo} alt="Facebook" style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'contain' }} />
//               <img src={youtubeLogo} alt="Youtube" style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'contain' }} />
//               <img src={instaLogo} alt="Instagram" style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'contain' }} />
//               <img src={twitter} alt="Twitter" style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'contain' }} />
//             </div>
//           </div>
//           <div className="footer-right" style={{ lineHeight: '1.2' }}>
//             <div className="footer-nonprofit" style={{ marginBottom: '0' }}>
//               US IRS 501(C)(3) Non-Profit Organization
//             </div>
//             <div className="footer-ein" style={{ marginBottom: '0', marginTop: '0' }}>
//               ID: EIN 94-3184861
//             </div>
//             <div className="footer-copyright" style={{ marginBottom: '0', marginTop: '0' }}>
//               © 2024 All Rights Reserved      |  Privacy Policy
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NewFooter