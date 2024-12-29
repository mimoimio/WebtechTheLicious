const routes = [
    { name: 'Home', url: 'index.html' },
    { name: 'About Us', url: 'aboutus.html' },
    { name: 'Menu', url: 'menu.html' },
    { name: 'Contact Us', url: 'contactus.html' },
];

export default function navbar() {
    // Generate the navigation items dynamically
    const navItems = routes.map(route => `
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="${route.url}">${route.name}</a>
        </li>
    `).join(''); // Join the array of strings into a single string

    return `
    <nav class="navbar navbar-expand-lg bg-white w-100">
        <div class="container-fluid">
            <!-- TITLE / BRAND / LOGO -->
            <a class="navbar-brand fs-4" href="index.html">The Licious</a>
            <!-- TOGGLE BUTTON -->
            <button class="navbar-toggler border-none" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- SideBar-->
            <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <!-- Header for sidebar -->
                <div class="offcanvas-header text-black border-bottom">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel"
                        style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;">
                        The Licious
                    </h5>
                    <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        ${navItems}
                        <li class="nav-item">
                            <a class="nav-link"
                                href="https://docs.google.com/forms/d/1V2YshOzGgkbvLRPLolTkf00uwJNjKykhdljCakH7j5g/"
                                target="_blank">Order Now</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    `;
}
