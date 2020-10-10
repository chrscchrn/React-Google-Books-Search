import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <p>Google Books: </p>
      <a className="navbar-brand" href="/search">
        Search Books
      </a>
      <p>and</p>
      <a className="navbar-brand" href="/saved">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;