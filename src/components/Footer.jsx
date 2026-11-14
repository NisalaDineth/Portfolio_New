export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Nisala Dineth. All rights reserved.
        </p>
        <button
          className="footer__back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
