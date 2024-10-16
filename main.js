const keys = document.querySelectorAll('.key');
const sounds = [
    document.getElementById('sound1'), document.getElementById('sound2'),
    document.getElementById('sound3'), document.getElementById('sound4'),
    document.getElementById('sound5'), document.getElementById('sound6'),
    document.getElementById('sound7'), document.getElementById('sound8')
];

function playSoundAndToggle(box, sound) {
    sound.currentTime = 0;
    sound.play();
    box.classList.add('played');

    setTimeout(() => {
        box.classList.remove('played');
    }, 100);
}

document.addEventListener('keydown', function(event) {
    const keyPressed = event.key;
    console.log('Key pressed: ', keyPressed);

    const keyMap = { 
        'a':0, 's':1, 'd':2,
        'f':3, 'g':4, 'h':5,
        'j':6, 'k':7
     };

    const index = keyMap[keyPressed.toLocaleLowerCase()];
    if (index !== undefined) {
        playSoundAndToggle(keys[index], sounds[index]);
    }
});

