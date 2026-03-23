function Navbar() {
  return (
    <nav>
      <img src="/assets/images/logo AK.jpg" alt="logo" />

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="hamburger">
        <img src="https://img.icons8.com/?size=100&id=36389&format=png&color=ffffff" />
      </div>
    </nav>
  );
}

export default Navbar;
