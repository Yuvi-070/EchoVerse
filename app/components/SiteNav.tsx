import Link from "next/link";

export default function SiteNav() {
  return (
    <nav className="ev-nav">
      <div className="ev-nav-inner">
        <Link className="ev-brand" href="/" aria-label="EchoVerse home">
          ECHO-VERSE
        </Link>
        <div className="ev-nav-links" role="navigation" aria-label="Primary navigation">
          <Link className="ev-nav-link" href="/main">
            Home
          </Link>
          <Link className="ev-nav-link" href="/about">
            About
          </Link>
          <Link className="ev-nav-link" href="/contact">
            Contact
          </Link>
        </div>
        <div className="ev-search" role="search">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
            </g>
          </svg>
          <input className="searchinput" type="search" placeholder="Search posts" aria-label="Search posts" />
        </div>
      </div>
    </nav>
  );
}
