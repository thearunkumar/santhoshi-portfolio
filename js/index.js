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
            return pathname === '/' || pathname === '/index.html' || pathname === '/home.html' ? 'active' : 'in-active';
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

///

class FillCard extends HTMLElement {
    constructor() {
        super();
    }

    getBaseStyle() {
        return `
            <link href="css/components/fill-card.css" type="text/css" rel="stylesheet" />
        `;
    }

    getFillCardStyle() {
        return this.getBaseStyle();
    }

    getCardElements() {
        return '123';
    }

    getFillCard() {
        return `<section class="single-view">
            ${this.getCardElements()}
        </section>`;
    }

    connectedCallback() {
        this.innerHTML = this.getFillCardStyle() + this.getFillCard();
    }

}

customElements.define('fill-card', FillCard);

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    // TODO: Ideally get it as a prop from outside. Just like react. Ok, for now!
    getMenuItems() {
        return [{
            identifier: 'dribble',
            displayIcon: '*',
            href: '/'
        }, {
            identifier: 'behance',
            displayIcon: '&',
            href: '/projects.html'
        }, {
            identifier: 'linkedin',
            displayIcon: '^',
            href: '/contact.html'
        }, {
            identifier: 'mail',
            displayIcon: 'm',
            href: '/contact.html'
        }, {
            identifier: 'medium',
            displayIcon: 'me',
            href: '/contact.html'
        }]
    }
    
    connectedCallback() {
        this.innerHTML = this.getFooterStyles() + this.getFooter();
    }

    getFooterStyles() {
        return `
            <link href="css/components/footer.css" type="text/css" rel="stylesheet" />
        `;
    }

    getMenuItemClass(identifier) {
        const { pathname } = window.location;

        if (identifier === 'home') {
            return pathname === '/' || pathname === '/index.html' || pathname === '/home.html' ? 'active' : 'in-active';
        }

        if (pathname === `/${identifier}.html`) {
            return 'active';
        }
        return 'in-active';
    }

    getMenuElement() {
        const menuItems = this.getMenuItems();
        let menuString = ``;

        menuItems.forEach(({ identifier, displayIcon, href }) => {
            menuString += `<li id="${identifier}" class="${this.getMenuItemClass(identifier)}"><a href="${href}">${displayIcon}</a></li>`;
        })

        return menuString;
    }

    getFooter() {
        return `
            <footer>
                <p>&copy; SanthoshiSrisailapathi 2022</p>
                <nav>
                    <ul>
                        ${this.getMenuElement()}
                    </ul>
                </nav>
            </footer>
        `;
    }
}

customElements.define('portfolio-footer', Footer);