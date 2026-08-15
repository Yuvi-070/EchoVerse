export default function SiteFooter() {
  return (
    <footer className="ev-footer">
      <p>
        <a href="#top" className="button" aria-label="Back to top">
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </a>
      </p>
      <p className="ev-footer-links">
        <a href="https://www.linkedin.com/in/yuvraj-tale-m0705/" target="_blank" rel="noreferrer">
          ©2023 Yuvraj Tale
        </a>{" "}
        ·{" "}
        <a href="https://github.com/Yuvi-070" target="_blank" rel="noreferrer">
          Github
        </a>{" "}
        ·{" "}
        <a href="https://www.instagram.com/yuvi._7_" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </p>
    </footer>
  );
}
