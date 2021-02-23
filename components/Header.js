import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <figure></figure>
        <div>
          <button type="button" style={{ background: "lightgreen" }}>
            Log in
          </button>
          <button type="button" style={{ background: "lightgreen" }}>
            New User
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
