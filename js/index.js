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
                    <img src="images/Logo.svg" />
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
            href: 'https://dribbble.com/Santhoshi_Srisailapathi'
        }, {
            identifier: 'behance',
            href: 'https://www.behance.net/sans4'
        }, {
            identifier: 'linkedin',
            href: 'https://www.linkedin.com/in/santhoshi-srisailapathi-314652164/'
        }, {
            identifier: 'mail',
            href: 'mailto:ssanthoshi@gmail.com?subject=Sent via Portfolio'
        }, {
            identifier: 'medium',
            href: 'https://ssanthoshi1904.medium.com/'
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

    getIcon(identifier) {
        const src = `images/icons/${identifier}.svg`;
        return `<img class="icon" src="${src}" />`;
    }

    getMenuElement() {
        const menuItems = this.getMenuItems();
        let menuString = ``;

        menuItems.forEach(({ identifier, href }) => {
            menuString += `<li id="${identifier}" class="${this.getMenuItemClass(identifier)}"><a href="${href}">${this.getIcon(identifier)}</a></li>`;
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