import React from "react";

const Navbar = () => {
  return (
    <header className="header-bg">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between w-100">
          <a className="navbar-brand">
            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={78}
                height={46}
                viewBox="0 0 78 46"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.0865 26.5706L0 45.4001L9.36387 45.5019L46.7176 14.9676L54.6565 23.2118L28.3969 45.5019H70.5216L64.9219 39.8073H44L58.3793 26.8073L68.4103 37.1397L77.1501 45.8073V5.80725L59.1349 18.937L46.0051 6.01082L29.9237 19.7513V0.692749H22.0865V26.5706ZM71.2468 15.5782L63.5114 23.4181L71.2468 32.0668V15.5782Z"
                  fill="#f28e08"
                />
                <rect x={40} y="22.9233" width={2} height={2} fill="#176B87" />
                <rect x={43} y="22.9233" width={2} height={2} fill="#176B87" />
                <rect x={40} y="25.9233" width={2} height={2} fill="#176B87" />
                <rect x={43} y="25.9233" width={2} height={2} fill="#176B87" />
              </svg>
              <div className="logo-name ps-4">house plan</div>
            </div>
          </a>
          <div>
            <div className="contact-head d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center"> 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <g clipPath="url(#clip0_19_277)">
                    <path
                      d="M23.347 17.8636L19.9977 14.5143C18.8015 13.3181 16.768 13.7967 16.2896 15.3516C15.9307 16.4282 14.7346 17.0263 13.658 16.787C11.2657 16.1889 8.03602 13.0789 7.43794 10.567C7.07908 9.49036 7.79679 8.29419 8.87334 7.93538C10.4284 7.45691 10.9068 5.42343 9.71066 4.22726L6.36138 0.877989C5.40445 0.0406705 3.96905 0.0406705 3.13173 0.877989L0.859009 3.15071C-1.41371 5.54305 1.09824 11.8827 6.72023 17.5047C12.3422 23.1267 18.6819 25.7583 21.0743 23.366L23.347 21.0932C24.1843 20.1363 24.1843 18.7009 23.347 17.8636Z"
                      fill="#f28e08"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_19_277">
                      <rect
                        width={24}
                        height={24}
                        fill="white"
                        transform="translate(0 0.25)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div className="ps-2 login-text">1800-313-2350</div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M22.0961 3.33959C20.8537 1.99212 19.149 1.25 17.2956 1.25C15.9102 1.25 14.6415 1.688 13.5245 2.55172C12.9609 2.98766 12.4502 3.52109 12 4.14359C11.5499 3.52123 11.0391 2.98766 10.4753 2.55172C9.3585 1.688 8.08978 1.25 6.70439 1.25C4.851 1.25 3.14611 1.99212 1.90373 3.33959C0.676219 4.67131 0 6.49067 0 8.4627C0 10.4924 0.756422 12.3504 2.38036 14.31C3.83311 16.0629 5.92106 17.8423 8.33897 19.9028C9.16463 20.6065 10.1005 21.404 11.0722 22.2537C11.329 22.4785 11.6587 22.6024 12 22.6023C12.3415 22.6023 12.6711 22.4785 12.9274 22.254C13.8991 21.4042 14.8356 20.6063 15.6615 19.9022C18.0791 17.8421 20.167 16.0629 21.6198 14.3098C23.2438 12.3505 24 10.4924 24 8.46252C24 6.49067 23.3238 4.67131 22.0961 3.33959Z"
                  fill="#f28e08"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
              >
                <g clipPath="url(#clip0_19_284)">
                  <path
                    d="M7.7325 14.3127H7.73362C7.73456 14.3127 7.7355 14.3125 7.73639 14.3125H20.4844C20.6372 14.3125 20.7858 14.2627 20.9077 14.1707C21.0297 14.0787 21.1184 13.9494 21.1604 13.8025L23.9729 3.9588C24.0028 3.85417 24.008 3.74404 23.9881 3.63707C23.9682 3.53009 23.9238 3.42919 23.8583 3.3423C23.7927 3.2554 23.7079 3.1849 23.6105 3.13635C23.5131 3.0878 23.4057 3.06252 23.2969 3.0625H6.11095L5.60836 0.800594C5.57363 0.64442 5.48668 0.504756 5.36188 0.404656C5.23707 0.304556 5.08186 0.250002 4.92187 0.25L0.703125 0.25C0.314766 0.25 0 0.564766 0 0.953125C0 1.34148 0.314766 1.65625 0.703125 1.65625H4.35792C4.44689 2.05703 6.76317 12.4805 6.89648 13.0802C6.14925 13.405 5.625 14.1501 5.625 15.0156C5.625 16.1787 6.57131 17.125 7.73437 17.125H20.4844C20.8727 17.125 21.1875 16.8102 21.1875 16.4219C21.1875 16.0335 20.8727 15.7188 20.4844 15.7188H7.73437C7.34672 15.7188 7.03125 15.4033 7.03125 15.0156C7.03125 14.6285 7.34564 14.3136 7.7325 14.3127ZM22.3647 4.46875L19.9539 12.9062H8.29837L6.42337 4.46875H22.3647ZM7.03125 19.2344C7.03125 20.3975 7.97756 21.3438 9.14062 21.3438C10.3037 21.3438 11.25 20.3974 11.25 19.2344C11.25 18.0713 10.3037 17.125 9.14062 17.125C7.97756 17.125 7.03125 18.0713 7.03125 19.2344ZM9.14062 18.5312C9.52828 18.5312 9.84375 18.8467 9.84375 19.2344C9.84375 19.622 9.52828 19.9375 9.14062 19.9375C8.75297 19.9375 8.4375 19.622 8.4375 19.2344C8.4375 18.8467 8.75297 18.5312 9.14062 18.5312ZM16.9687 19.2344C16.9687 20.3975 17.9151 21.3438 19.0781 21.3438C20.2412 21.3438 21.1875 20.3974 21.1875 19.2344C21.1875 18.0713 20.2412 17.125 19.0781 17.125C17.9151 17.125 16.9687 18.0713 16.9687 19.2344ZM19.0781 18.5312C19.4658 18.5312 19.7812 18.8467 19.7812 19.2344C19.7812 19.622 19.4658 19.9375 19.0781 19.9375C18.6905 19.9375 18.375 19.622 18.375 19.2344C18.375 18.8467 18.6905 18.5312 19.0781 18.5312Z"
                    fill="#f28e08"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_19_284">
                    <rect
                      width={24}
                      height={24}
                      fill="white"
                      transform="translate(0 0.25)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg justify-content-between">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link first px-4 py-1">Sale</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 py-1">
                  <span> Styles</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={12}
                    viewBox="0 0 22 14"
                    fill="none"
                    className="ps-2"
                  >
                    <path
                      d="M1 1.75L11 11.75L21 1.75"
                      stroke="#f28e08"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 py-1">
                  <span> Styles</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={12}
                    viewBox="0 0 22 14"
                    fill="none"
                    className="ps-2"
                  >
                    <path
                      d="M1 1.75L11 11.75L21 1.75"
                      stroke="#f28e08"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="user-login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={20}
              viewBox="0 0 24 25"
              fill="none"
            >
              <g clipPath="url(#clip0_19_305)">
                <path
                  d="M23.2332 22.6102L17.5212 16.6694C18.9904 14.9263 19.7956 12.7197 19.7945 10.44C19.7945 5.09701 15.4475 0.75 10.1045 0.75C4.76156 0.75 0.414551 5.09701 0.414551 10.44C0.414551 15.783 4.76156 20.13 10.1045 20.13C12.1104 20.13 14.0218 19.525 15.6561 18.3765L21.4115 24.3624C21.6521 24.6122 21.9756 24.75 22.3224 24.75C22.6506 24.75 22.9619 24.6249 23.1982 24.3974C23.4395 24.1648 23.5786 23.846 23.5852 23.511C23.5917 23.176 23.4652 22.852 23.2332 22.6102ZM10.1045 3.27782C14.0538 3.27782 17.2667 6.49069 17.2667 10.44C17.2667 14.3893 14.0538 17.6022 10.1045 17.6022C6.15524 17.6022 2.94237 14.3893 2.94237 10.44C2.94237 6.49069 6.15524 3.27782 10.1045 3.27782Z"
                  fill="#f28e08"
                />
              </g>
              <defs>
                <clipPath id="clip0_19_305">
                  <rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(0 0.75)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="login-text">register</div>
            <div className="login-text">login</div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
