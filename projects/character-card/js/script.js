const character = {
    name: "Snortleblat",
    class: "Swamp Beat Diplomat",
    level: 5,
    health: 100,
    image: 'https://andejuli.github.io/img/snortleblat.png',
    attacked() {
        if (this.health >= 20) {
            this.level -= 1;
            this.health -= 20;
        } else {
            alert('Character Died');
        }
    },
    levelUp() {
        this.level += 1;
        this.health += 20;
    }
};

// DOM elements
const nameEl = document.querySelector('.name');
const classEl = document.getElementById('class');
const levelEl = document.getElementById('level');
const healthEl = document.getElementById('health');
const imageEl = document.querySelector('.image');
const logEl = document.getElementById('log');

// Function to update DOM
function updateUI() {
    nameEl.textContent = character.name;
    classEl.textContent = character.class;
    levelEl.textContent = character.level;
    healthEl.textContent = character.health;
    imageEl.src = character.image;
}

// Button events
document.getElementById('attacked').addEventListener('click', () => {
    character.attacked();
    updateUI();
    logEl.textContent = 'Snortleblat was attacked!';
});

document.getElementById('levelup').addEventListener('click', () => {
    character.levelUp();
    updateUI();
    logEl.textContent = 'Snortleblat leveled up!';
});

// Initial display
updateUI();
