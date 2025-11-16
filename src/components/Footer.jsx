const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      © {year} Joseph Fujimoto. All rights reserved.
    </footer>
  );
};

export default Footer;

