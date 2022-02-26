class ProjectCard extends HTMLElement {
    constructor() {
        super();
        const attr = this.getAttribute('project');
        this.project = JSON.parse(attr);
    }

    static get observedAttributes() {
        return [`project`];
    }

    getStyles() {
        return `<style>
            .project {
                position: relative;
                display: flex;
            }
            .front, .back {
                display: flex;
                flex: 1;
            }
            .front img {
                width: 100%;
            }
            .back {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                display: none;
                background: var(--white-color);
            }
            .front:hover + .back {
                display: flex;
            }
            .back:hover {
                display: flex;
            }
            .project-information {
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--active-purple);
                flex: 1;
                flex-direction: column;
                padding: 5rem;
                box-sizing: border-box;
            }
            .project-information h1 {
                font-size: 8rem;
                margin-bottom: 4rem;
            }
            .project-information .meta-info {
                font-size: 4rem;
                margin-bottom: 2.5rem;
                text-align: center;
            }
            .project-information .period {
                font-size: 3rem;
            }
        </style>`
    }

    getBackView(projectInfo) {
        const {header, meta, period} = projectInfo;
        return `<div class="project-information">
            <h1>${header}</h1>
            <span class="meta-info">${meta}</span>
            <span class="period">${period}</span>
        </div>`
    }

    getComponent() {
        return `<article class="project">
            <aside class="front">
                <img src="${this.project.image}" />
            </aside>
            <aside class="back">
                ${this.getBackView(this.project.info)}
            </aside>
        </article>`
    }

    connectedCallback() {
        this.innerHTML = this.getStyles() + this.getComponent();
    }
}

customElements.define('project-card', ProjectCard);

class ProjectsCard extends HTMLElement {
    constructor() {
        super();
        this.projects = [{
            image: 'images/projects/pet-foods.svg',
            identifier: 'petFoods',
            hide: false,
            info: {
                header: `paw n paw`,
                meta: 'UX / UI, Interaction design, Visual design, Graphic design, UX Research',
                period: 'December'
            }
        }, {
            image: 'images/projects/rent.svg',
            identifier: 'rent',
            hide: false,
            info: {
                header: 'FreshStart',
                meta: 'UX / UI, Interaction design, Visual design, Graphic design, UX Research',
                period: 'January'
            }
        }, {
            image: 'images/projects/daily-ui.svg',
            identifier: 'dailyUi',
            hide: false,
            info: {
                header: 'Daily UI',
                meta: 'UX / UI, Interaction design, Visual design, Graphic design',
                period: 'January'
            }
        }, {
            image: 'images/projects/defender.svg',
            identifier: 'defender',
            hide: true,
            info: {
                header: 'Daily UI',
                meta: 'UX / UI, Interaction design, Visual design, Graphic design, UX Research',
                period: 'January'
            }
        }]
    }

    getStyles() {
        return `<style>
            .view-container {
                padding-top: 18rem;
                padding-left: 10rem;
                padding-right: 10rem;
                box-sizing: border-box;
            }
            .projects-title {
                color: var(--about-title-color);
                text-align: left;
                font-size: 5rem;
                padding: 0;
                margin: 0;
                font-weight: 100;
                margin-bottom: 5rem;
            }
            .projects {
                display: flex;
                flex: 1;
                flex-direction: row;
                width: 100%;
                flex-wrap: wrap;
            }
            .projects project-card {
                width: 50%;
                padding: 5rem;
                padding-left: 0;
                padding-top: 0;
                box-sizing: border-box;
            }
        </style>`
    }

    getProjects() {
        let projects = '';
        this.projects.filter(project => project.hide === false).forEach((project) => {
            projects += `<project-card project='${JSON.stringify(project)}'></project-card>`
        });
        return projects;
    }

    getComponent() {
        return `
            <section class="view-container">
                <h1 class="projects-title">Projects</h1>
                <article class="projects">${this.getProjects()}</article>
            </section>`
    }

    connectedCallback() {
        this.innerHTML = this.getStyles() + this.getComponent();
    }
}

customElements.define('projects-card', ProjectsCard);