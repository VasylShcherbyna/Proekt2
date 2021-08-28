import { refs } from './refs.js';
import teamModalTemplate from '../templates/teamModalTemplate.hbs';
import { closeOnClick, modalKeypressEsc } from './modalClose.js';
const team = [
    {
        name: "Anzhela",
        lastName: "Boiko",
        img: "https://media-exp1.licdn.com/dms/image/C4E03AQFecOscWXTDbw/profile-displayphoto-shrink_800_800/0/1621064840282?e=1633564800&v=beta&t=z3FrWjCSU7AQJn77xBeNyoKp1t2aYyBGpYkoYaEyQIc",
        githubLink: "https://github.com/AngieBoiko/",
        linkedInLink: "https://www.linkedin.com/in/anzhela-boiko-6b6579212/",
    },
    {
        name: "Anastasyia",
        lastName: "Loseva",
        img: "https://media-exp1.licdn.com/dms/image/D5635AQGzCvAtSGeHew/profile-framedphoto-shrink_800_800/0/1628075664626?e=1628190000&v=beta&t=aA1Jd2RcmE4TnoEPmCtr9X5uaIS5BRJFs_7ObMZeHgo",
        githubLink: "https://github.com/Anastasia199129",
        linkedInLink: "https://www.linkedin.com/in/anastasyia-loseva-68a34a211/",
    },
    {
        name: "Bogdan",
        lastName: "Kolesnikov",
        img: "https://media-exp1.licdn.com/dms/image/C4E03AQH9ut2VuEeP4Q/profile-displayphoto-shrink_800_800/0/1620299550064?e=1633564800&v=beta&t=pvIzuKByv-wJVtJAJCOZQB4Z-NRKPjyNBaOE0T7e2Is",
        githubLink: "https://github.com/bogdankol",
        linkedInLink: "https://www.linkedin.com/in/bogdan-kolesnikov-972981211/",
    },
    {
        name: "Dima",
        lastName: "Dyka",
        img: "./dima.jpg",
        githubLink: "https://github.com/DukaDima",
        linkedInLink: "https://www.linkedin.com/in/dima-duka-921ba1211/",
    },
    {
        name: "Ihor",
        lastName: "Kalyniak",
        img: "./igor.jpg",
        githubLink: "https://github.com/ikalyniak",
        linkedInLink: "https://www.linkedin.com/in/ikalyniak/",
    },
    {
        name: "Olga",
        lastName: "Kostina",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQGikyj3n0zY2w/profile-displayphoto-shrink_800_800/0/1517587157103?e=1633564800&v=beta&t=3IgApPVxqXJ4J36t83rsJao6zk49GUB0iTEK11IM-T4",
        githubLink: "https://github.com/funnykoss",
        linkedInLink: "https://www.linkedin.com/in/%D0%BE%D0%BB%D1%8C%D0%B3%D0%B0-%D0%BA%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B0-2b3a3a61/",
    },
    {
        name: "Roma",
        lastName: "Petryk",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEQ_PtYYwZLGw/profile-displayphoto-shrink_800_800/0/1627629651851?e=1633564800&v=beta&t=arI8yRjMvplDPNGYghSS-MJyrOsz2WHp7t4CJwpqQVU",
        githubLink: "https://github.com/fantasticargument",
        linkedInLink: "https://www.linkedin.com/in/%D1%80%D0%BE%D0%BC%D0%B0%D0%BD-%D0%BF%D0%B5%D1%82%D1%80%D0%B8%D0%BA-792b52218/",
    },
    {
        name: "Vasyl",
        lastName: "Shcherbyna",
        img: "./vasyl.jpg",
        githubLink: "https://github.com/VasylShcherbyna",
        linkedInLink: "https://www.linkedin.com/in/vasyl-shcherbyna-110751211/",
    },
    {
        name: "Yevheniia",
        lastName: "Danylenko",
        img: "https://media-exp1.licdn.com/dms/image/C4D03AQEbR22dobYuvw/profile-displayphoto-shrink_800_800/0/1627931569086?e=1633564800&v=beta&t=dKXHUCoshDGb4TxBRHVqhaQI6E9xSA51AG6xfAGT-B8",
        githubLink: "https://github.com/Yevheniia87",
        linkedInLink: "https://www.linkedin.com/in/yevheniia-danylenko-021350131/",
    },
    {
        name: "Yuriy",
        lastName: "Koliadzhyn",
        img: "./yuriy.jpg",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://www.linkedin.com/in/yurii-koliadzhyn-b89493104/",
    },
];
const showTeamModal = (e) => {
    e.preventDefault();
    document.addEventListener('keydown', modalKeypressEsc);
    refs.modalBackdrop.addEventListener('click', closeOnClick);
    const teamModalHTML = teamModalTemplate(team);
    refs.modalBackdrop.classList.remove('is-hidden');
    document.body.classList.add('modal-open');
    refs.cardContainer.insertAdjacentHTML('beforeend', teamModalHTML);
};
refs.aboutTeam.addEventListener('click', showTeamModal);