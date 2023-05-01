function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {
        /* display an <a> tag for each link here */
        links.map((link) => {
          const navi = `#${link}`;
          // console.log(navi)
          return (
            <a key={link} href={navi}>
              {" "}
              {link}
            </a>
          );
        })
      }
    </nav>
  );
}

export default NavBar;
