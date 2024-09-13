import {JSX} from "react";

export default function workAndProgress(): JSX.Element {
    const loadStars = () => {
        const starsContainer = document.createElement('div');
        const numStars = 100;
        starsContainer.classList.add('stars');
        starsContainer.id = 'stars';

        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const size = Math.random() * 3 + 1;
            const left = Math.random() * 100;
            const delay = Math.random() * 10;
            const duration = Math.random() * 5 + 5;

            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${left}vw`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${delay}s`;

            starsContainer.appendChild(star);
        }
        return starsContainer;
    }

    return (
        <>
            <h1 className="text-6xl">🚀 Work And Progress 🚧</h1>
            {loadStars()}
        </>
    )
}