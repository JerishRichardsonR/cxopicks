import { useRouter } from 'next/router'

export default function NavBar() {
  const router = useRouter()

    return (
      <aside className="left-sidebar show" id="left-sidebar">
        <nav className="navbar">
          <div className="scroll-sidebar">
            <div className="sidebar-nav">
              <span className="border_line"></span>
              <ul>
                <li className="sidebar-item">
                  <a
                    className={router.pathname.includes('/') ? "sidebar-link active" : "sidebar-link"}
                    onClick={() => { router.push("/") }}
                  >
                    <span className="box_icon">01</span>Profile Details
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className={router.pathname.includes('/usecase') ? "sidebar-link active" : "sidebar-link"}
                    // onClick={() => { router.push("/usecase") }}
                  >
                    <span className="box_icon">02</span>Use Case Details
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className={router.pathname.includes('/pricing') ? "sidebar-link active" : "sidebar-link"}
                    // onClick={() => { router.push("/pricing") }}
                  >
                    <span className="box_icon">03</span>Pricing Info
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className={router.pathname.includes('/marketing') ? "sidebar-link active" : "sidebar-link"}
                    // onClick={() => { router.push("/marketing") }}
                  >
                    <span className="box_icon">04</span>Marketing Assets
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className={router.pathname.includes('/workflow') ? "sidebar-link active" : "sidebar-link"}
                    // onClick={() => { router.push("/workflow") }}
                  >
                    <span className="box_icon">05</span>Workflow Details
                  </a>
                </li>               
              </ul>
            </div>
          </div>
        </nav>
     </aside>
    );
  }
