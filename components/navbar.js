function navbar() {
    return `
        <div id="nav-left">
        <a href="home.html"><img src="resources/buffer-logo.png" alt="" /></a>
            <img src="resources/ndia-flag.png" alt="" />
        </div>
        <div id="nav-mid">
            <ul>
            <li><a href="#" onmouseover="subMenu()" onmouseout="closeSubMenu()">Tools</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="/blog_homepage.html">Blog</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/customers.html">Customers</a></li>
            </ul>
        </div>
        <div id="nav-right">
            <a href="/login.html">Log in</a>
            <a href="/signup.html" class="get-started-btn">Get started now</a>
            <div id="ham">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" onclick="openHam()">
        </div>`
}

export default navbar;