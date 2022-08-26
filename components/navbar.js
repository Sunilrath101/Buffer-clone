function navbar() {
    return `
        <div id="nav-left">
            <img src="resources/buffer-logo.png" alt="" />
            <img src="resources/ndia-flag.png" alt="" />
        </div>
        <div id="nav-mid">
            <ul>
            <li><a href="">Tools</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Customers</a></li>
            </ul>
        </div>
        <div id="nav-right">
            <a href="">Log in</a>
            <a href="" class="get-started-btn">Get started now</a>
            <div id="ham">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" onclick="openHam()">
        </div>`
}

export default navbar;