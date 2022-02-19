const INTRO_DESCRIPTION_FIRST = 'INDEPENDENT';
const INTRO_DESCRIPTION_SECOND = 'UX / UI';
const INTRO_DESCRIPTION_THIRD = 'DESIGNER';
const WELCOME_MESSAGE = 'Welcome to my PORTFOLIO';

class IntroCard extends FillCard {
    constructor() {
        super();
    }

    getFillCardStyle() {
        return this.getBaseStyle() + `
        <style>
            .intro-card-view {
                displsy: flex;
                flex: 1;
                flex-direction: column;
                align-items: center;
            }
            h1 {
                color: var(--intro-description-color);
                font-size: var(--intro-description-size);
                padding: 0;
                margin: 1rem;
            }
            h3 {
                color: var(--active-purple);
                font-size: var(--welcome-message-size);
                padding: 0;
                margin: 1rem;
            }
            h1, h3 {
                text-align: center;
                font-weight: 200;
            }
        </style>
        `;
    }

    getCardElements = () => {
        return `<div class="intro-card-view">
            <h1 id="first">${INTRO_DESCRIPTION_FIRST}</h1>
            <h1 id="second">${INTRO_DESCRIPTION_SECOND}</h1>
            <h1 id="third">${INTRO_DESCRIPTION_THIRD}</h1>
            <h3>${WELCOME_MESSAGE}</h3>
        </div>`;
    }
}

customElements.define('intro-card', IntroCard);

const ABOUT_DESCRIPTION = 'I am a UX / UI desginer who aims to provide user-friendly, attractive, and accessible apps and sites. I have worked on many projects considering these features. My main motive is to develop good designs which target all sets of users';

class AboutCard extends FillCard {
    constructor() {
        super();
    }

    getFillCardStyle() {
        return this.getBaseStyle() + `
        <style>
            .about-card-view {
                displsy: flex;
                flex: 1;
                flex-direction: column;
                align-items: center;
            }
            .about-card-view h1 {
                color: var(--active-purple);
                font-size: var(--intro-description-size);
                padding: 0 15rem;
                margin: 1rem;
            }
            .circle {
                position: absolute;
                right: -18%;
                width: 70rem;
                height: 70rem;
                border-radius: 50%;
                background: linear-gradient(180deg, #fd5633, #322574);
            }
        </style>
        `;
    }

    getCardElements = () => {
        return `<div class="about-card-view">
            <h1>${ABOUT_DESCRIPTION}</h1>
            <div class="circle"></div>
        </div>`;
    }
}

customElements.define('about-card', AboutCard);

class ExperienceComponent extends HTMLElement {
    constructor() {
        super();
        this.year = this.getAttribute('year');
        this.course = this.getAttribute('course');
        this.institution = this.getAttribute('institution');
    }

    static get observedAttributes() {
        return [`year`, `course`, `institution`];
    }

    getStyles() {
        return `<style>
            .experience-component {
                display: flex;
                flex: 1;
            }
            .experience-component h3 {
                color: #fff;
                font-size: var(--welcome-message-size);
                font-weight: 200;
            }
            .experience-component .year {
                display: flex;
                flex: 1;
            }
            .experience-component .course {
                display: flex;
                flex: 2;
            }
            .experience-component .institution {
                display: flex;
                flex: 3;
            }
        </style>`
    }

    getComponent() {
        return `<aside class="experience-component">
            <h3 class="year">${this.year}</h3>
            <h3 class="course">${this.course}</h3>
            <h3 class="institution">${this.institution}</h3>
        </aside>`;
    }

    connectedCallback() {
        this.innerHTML = this.getStyles() + this.getComponent();
    }
}

customElements.define('experience-component', ExperienceComponent);

class CareerCard extends FillCard {
    constructor() {
        super();
        this.education = [{
            year: '2015 - 2019',
            course: 'B. Tech, Information Technology',
            institution: 'Veltech Multitech Dr. Rangarajan Dr. Sakunthala Engineering college'
        }];
        this.professional = [{
            year: '2021 - Present',
            course: 'UX Desginer',
            institution: 'Google UX design professional certification'
        }, {
            year: '2020 - 2021',
            course: 'Senior Systems Engineer',
            institution: 'Infosys'
        }, {
            year: '2019 - 2020',
            course: 'Systems Engineer',
            institution: 'Infosys'
        }]
    }

    getFillCardStyle() {
        return this.getBaseStyle() + `
        <style>
            .career-card-view {
                display: flex;
                flex: 1;
                flex-direction: column;
                align-items: center;
                background: var(--career-bg-color);
                padding: 3rem 0;
            }
            .experience-card {
                width: 90%;
                color: var(--white-color);
            }
            .meta-info {
                color: var(--white-color);
                text-align: left;
                font-weight: 100;
                margin-top: 7rem;
                margin-bottom: 2rem;
            }
            .circle {
                position: absolute;
                right: -18%;
                width: 70rem;
                height: 70rem;
                border-radius: 50%;
                background: linear-gradient(180deg, #fd5633, #322574);
                z-index: 99;
            }
        </style>
        `;
    }

    getCardElements = () => {
        return `<div class="career-card-view">
            <div class="experience-card">
                <h1 class="meta-info">Education</h1>
                ${this.education.map((education) => {
                    const {year, course, institution} = education;
                    return `<experience-component year="${year}" course="${course}" institution="${institution}"></experience-component>`;
                })}
            </div>
            <div class="experience-card">
                <h1 class="meta-info">Experience</h1>
                ${this.professional.map((career) => {
                    const {year, course, institution} = career;
                    return `<experience-component year="${year}" course="${course}" institution="${institution}"></experience-component>`;
                })}
            </div>
            
        </div>`;
    }
}

customElements.define('career-card', CareerCard);