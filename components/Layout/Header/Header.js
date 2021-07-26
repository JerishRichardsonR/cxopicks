import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

export default function Header() {
  const [searchText, setSearchText] = useState("");

    return (
      <div className="topbar-header">
        <nav className="navbar top-navbar">
          <div className="navbar-leftside">
            <div className="navbar-header">
              <button
                className="navbar-toggler mx-2"
                type="button"
                data-toggle="collapse"
                data-target="#left-sidebar"
                aria-controls="left-sidebar"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>            
            </div>
            <div className="logo">
              <Link href="/">
                <a>
                  <Image
                    src="/images/logo.png"
                    alt=""
                    height={55}
                    width={160}
                    className="user-photo-block pt-2"
                  />
                </a>
              </Link>
            </div> 
          </div>         
          <ul className="navbar-nav">   
            <li className="nav-item mx-2">
              <div className="nav-link-right form-group mb-0 flex-fill">
                <div className="search_bar_div">
                  <input type="text" name="searchText" className="form-control user-search-box" placeholder="Search here" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                </div>
              </div>
            </li>             
            <li className="nav-item mx-2">
              <a className="nav-link-right">
                <span className="fa fa-bell-o fa-2x pointer"></span>
              </a>
            </li>                
            <li className="nav-item mx-2">
              <div className="user-profile">
                <a className="nav-link-right">
                  <Image
                    src="/images/19@3x.png"
                    alt="Profile"
                    height={144}
                    width={144}
                    className="pointer user-photo-block"
                  />
                  <h4 className="pointer mx-3">
                    <span className="user-name">
                      Suzanne Gregory
                    </span>
                    <span className="status">Admin</span>
                  </h4>
                </a>
              </div>
            </li>                        
          </ul>
        </nav>
      </div>
    );
}