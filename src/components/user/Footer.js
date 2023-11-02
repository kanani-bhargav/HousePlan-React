import React from 'react'

const Footer = ({container}) => {
  return (
    <footer className='footer-wrapper'>
       <div className={`${container} d-lg-flex d-md-block justify-content-lg-between`}>
     <div className='col-lg-4 col-md-4 col-sm-12  mx-md-auto'>
     <div className='footer-logo d-flex flex-column align-items-center justify-content-center'>
        <svg
                xmlns="http://www.w3.org/2000/svg"
                width={110}
                height={80}
                viewBox="0 0 78 46"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.0865 26.5706L0 45.4001L9.36387 45.5019L46.7176 14.9676L54.6565 23.2118L28.3969 45.5019H70.5216L64.9219 39.8073H44L58.3793 26.8073L68.4103 37.1397L77.1501 45.8073V5.80725L59.1349 18.937L46.0051 6.01082L29.9237 19.7513V0.692749H22.0865V26.5706ZM71.2468 15.5782L63.5114 23.4181L71.2468 32.0668V15.5782Z"
                  fill="#EEE"
                />
                <rect x={40} y="22.9233" width={2} height={2} fill="#176B87" />
                <rect x={43} y="22.9233" width={2} height={2} fill="#176B87" />
                <rect x={40} y="25.9233" width={2} height={2} fill="#176B87" />
                <rect x={43} y="25.9233" width={2} height={2} fill="#176B87" />
              </svg>
              <div className='footer-logo-name p-2 neon'>
              House Plan
              </div>
        </div>
     </div>
      <div className='col-lg-8 col-md-8 col-sm-12 mx-md-auto mx-sm-auto side-section'>
      <div className='row justify-content-md-between'>
            <ul className='col-lg-3 col-md-6 col-sm-12 text-md-start text-sm-center'>
                <li><h5 className='footer-title'>BROWSE PLANS</h5></li>
                <li><span className='footer-item'>SEARCH</span></li>
                <li><span className='footer-item'>SIGNATURE PLANS</span></li>
                <li><span className='footer-item'>EXCLUSIVE DESIGNERS</span></li>
                <li><span className='footer-item'>ON SALE</span></li>
            </ul>
            <ul className='col-lg-3 col-md-6 col-sm-12 text-md-start text-sm-center'>
                <li><h5 className='footer-title'>WHAT WE DO</h5></li>
                <li><span className='footer-item'>ABOUT US</span></li>
                <li><span className='footer-item'>MEDIA CENTER</span></li>
                <li><span className='footer-item'>BLOG</span></li>
                <li><span className='footer-item'>FAQ</span></li>
            </ul>
            <ul className='col-lg-3 col-md-6 col-sm-12 text-md-start text-sm-center'>
                <li><h5 className='footer-title'>RESOURCES</h5></li>
                <li><span className='footer-item'>LIVABL</span></li>
                <li><span className='footer-item'>BUILDER ADVANTAGE</span></li>
                <li><span className='footer-item'>BUILDER MAGAZINE</span></li>
                <li><span className='footer-item'>ZONDA HOME</span></li>
            </ul>
            <ul className='col-lg-3 col-md-6 col-sm-12 text-md-start text-sm-center'>
                <li><h5 className='footer-title'>GET IN TOUCH</h5></li>
                <li><span className='footer-item'>PUBLISH HOUSEPLANS</span></li>
                <li><span className='footer-item'>ADVERTISE WITH US</span></li>
                <li><span className='footer-item'>CONTACT US</span></li>
            </ul>
        </div>
      </div>
       </div>

    </footer>
  )
}

export default Footer