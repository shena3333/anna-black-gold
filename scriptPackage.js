const packadges = [
    {
        namePackadge: 'СТАНДАРТ',
        listPackage: ['3 часа работы Ведущей на площадке',
            'часа работы Диджея на площадке',
            'Разработка персонализированного сценария на основе Ваших предпочтений и пожеланий',
            '1 онлайн/оффлайн встреча, на которой мы с вами обсудим все тонкости Вашего праздника',
            'Профессиональная аппаратура (Музыка и свет)',
            'Составление индивидуального плей-листа',
            'Помощь в подборе артистов, фотографов, видеографов, организаторов и т.д.'
        ]
    },
    {
        namePackadge: 'КОМФОРТ',
        listPackage: ['4 часа работы Ведущей на площадке',
            '4 часа работы Диджея на площадке',
            'Разработка персонализированного сценария на основе Ваших предпочтений и пожеланий',
            '1 онлайн/оффлайн встреча, на которой мы с вами обсудим все тонкости Вашего праздника',
            'Профессиональная аппаратура (Музыка и свет)',
            'Составление индивидуального плей-листа',
            'Помощь в подборе артистов, фотографов, видеографов, организаторов и т.д.'
        ]
    },
    {
        namePackadge: 'ПРЕМИУМ ДЕ ЛЮКС',
        listPackage: ['5 часов работы Ведущей на площадке + 1 час WELCOME В ПОДАРОК',
            '6 часов работы Диджея на площадке + 1 час в подарок',
            'Профессиональная аппаратура (Музыка и свет)',
            '2 онлайн/оффлайн встречи, на которых мы с вами обсудим все тонкости Вашего праздника и проработаем его более детально',
            'Разработка персонализированного сценария на основе Ваших предпочтений и пожеланий',
            'Онлайн встречи по любым вопросам',
            'Составление индивидуального плей-листа',
            'Видеоролик с поздравлениями на память',
            'Помощь в подборе артистов, фотографов, видеографов, организаторов и т.д.'
        ]
    }
];

const packagesContainer = document.querySelector('.packages-container');

packadges.forEach(package => {
    const packageDiv = document.createElement('div');
    packageDiv.classList.add('package');
    const title = document.createElement('h2');
    title.classList.add('package-title');
    title.innerText = package.namePackadge;
    packageDiv.appendChild(title);
    const list = document.createElement('ul');
    list.classList.add('package-list');
    package.listPackage.forEach(item => {
        const part = document.createElement('li');
        part.classList.add('package-item');
        part.innerText = item;
        list.appendChild(part);
    });
    packageDiv.appendChild(list);
    packagesContainer.appendChild(packageDiv)
})