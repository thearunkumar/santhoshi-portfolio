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