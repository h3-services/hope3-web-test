const NewFooter = () => {
  return (
    <div className="footer">
      <div className="footer-outer-box">
        <div className="footer-box">
          <div className="footer-left">
            <div className="footer-title">HOPE3</div>
            <div className="footer-address">
              Sammamish, WA - 98074
            </div>
            <a href="mailto:contact@hope3.org" className="footer-email">
              contact@hope3.org
            </a>
            <div className="social-links">
               <img src="/assets/linkedn_logo.png" alt="LinkedIn" />
               <img src="/assets/fb_logo.png" alt="Facebook" />
              <img src="/assets/yb_logo.png" alt="Youtube" />
               <img src="/assets/ints_logo.png" alt="Instagram" />
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-nonprofit">
              HOPE3 is a 501(c)(3) nonprofit organization
            </div>
            <div className="footer-ein">
              EIN: XX-XXXXXXX
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2024 HOPE3. All rights reserved.
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  )
}

export default NewFooter