

function Header() {
    return (
        <div className="header_container">
            <ul className="header_container_nav">
                <li><img src="https://img.icons8.com/color/48/000000/cook-female.png" alt="logo-cook" /></li>
                <li><a className="header_container_nav-items" href="/">Home</a></li>
                <li><a className="header_container_nav-items" href="/recipes">Recipes</a></li>
                <li><a className="header_container_nav-button-link" href="/">Add your recipe</a></li>
            </ul>
        </div>
    );
}

export default Header;