import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="nav_bar_top_main_container">
        <div className="nav_bar_sub_container">
            <div className="logo_top">Menna</div>
            <div className="nav_bar_items">
                <a>Home</a>
                <select>
                    <option><a>About us</a></option>
                    <option><a>our impact</a></option>
                    <option><a>projects</a></option>
                    <option><a>future plans</a></option>
                </select>
                <a>Gallery</a>
                <a>partners</a>
                <a>contact</a>
            </div>
            <div className="memebership_btn_top">
                <a>Be Member</a>
            </div>
      </div>
    </div>
  );
}

export default Navbar;