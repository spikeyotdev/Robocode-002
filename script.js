const animals = {
    Dog: { image: 'dog.jpg', text: 'У собак уникальный «отпечаток носа».', sound: 'dog.mp3' },
    Cat: { image: 'cat.jpeg', text: 'Кошки спят около 70% своей жизни.', sound: 'cat.mp3' },
    Parrot: { image: 'parrot.jpg', text: 'Попугаи могут повторять до 1000 слов!', sound: 'parrot.mp3' }
};

let currentSound = '';

function showAnimal(animal) {
    const data = animals[animal];
    if (!data) return;

    document.getElementById('animal-image').src = data.image;
    document.getElementById('animal-text').textContent = data.text;

    currentSound = data.sound;

    const playButton = document.getElementById('animal-sound');
    playButton.classList.remove('hidden');
    playButton.disabled = false;
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.sound');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const animal = button.getAttribute('data-animal');
            showAnimal(animal);
        });
    });

    document.getElementById('animal-sound').addEventListener('click', function () {
        if (currentSound) {
            const audio = new Audio(currentSound);
            audio.play();
        } else {
            alert('Виберите животное! А то пусто )');
        }
    });
});