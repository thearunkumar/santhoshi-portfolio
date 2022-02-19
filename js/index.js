class Header extends HTMLElement {
    constructor() {
        super();
    }

    // TODO: Ideally get it as a prop from outside. Just like react. Ok, for now!
    getMenuItems() {
        return [{
            identifier: 'home',
            display: 'Home',
            href: '/'
        }, {
            identifier: 'projects',
            display: 'Projects',
            href: '/projects.html'
        }, {
            identifier: 'contact',
            display: 'Contact',
            href: '/contact.html'
        }]
    }
    
    connectedCallback() {
        this.innerHTML = this.getHeaderStyles() + this.getHeader();
    }

    getHeaderStyles() {
        return `
            <link href="css/components/header.css" type="text/css" rel="stylesheet" />
        `;
    }

    getMenuItemClass(identifier) {
        const { pathname } = window.location;

        if (identifier === 'home') {
            return pathname === '/' || pathname === '/index.html' ? 'active' : 'in-active';
        }

        if (pathname === `/${identifier}.html`) {
            return 'active';
        }
        return 'in-active';
    }

    getMenuElement() {
        const menuItems = this.getMenuItems();
        let menuString = ``;

        menuItems.forEach(({ identifier, display, href }) => {
            menuString += `<li id="${identifier}" class="${this.getMenuItemClass(identifier)}"><a href="${href}">${display}</a></li>`;
        })

        return menuString;
    }

    getHeader() {
        return `
            <header>
                <figure>
                    <img src="images/logo.png" />
                </figure>
                <nav>
                    <ul>
                        ${this.getMenuElement()}
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('portfolio-header', Header);