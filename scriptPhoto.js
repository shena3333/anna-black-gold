const photos = [
    "./images/event1.jpg",
    "./images/event2.jpg",
    "./images/event3.jpg",
    "./images/event4.jpg",
    "./images/event5.jpg",
    "./images/event6.jpg",
    "./images/event7.jpg"
];

const photoGrid = document.querySelector('.photo-grid');
photos.forEach(urlPhoto => {
    const img = document.createElement('img');
    img.src = urlPhoto;
    img.alt = "Мероприятие";
    img.classList.add('event-photo');
    photoGrid.appendChild(img);
});
