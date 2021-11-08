let button = document.getElementById('btn');
let gif = document.getElementById('gif-rick');
let heading = document.getElementById('heading');

button.addEventListener('click', function () {
    var confettiSettings = { "target": "confetti-holder", "max": "150", "size": "1", "animate": true, "props": ["circle", "square", "triangle", "line", { "type": "svg", "src": "https://agezao.github.io/confetti-js/site/hat.svg", "size": 35, "weight": 0.2 }], "colors": [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]], "clock": "25", "rotate": true, "width": "1440", "height": "789", "start_from_edge": false, "respawn": true };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    gif.style.width = '500px';
    gif.style.height = '500px';
    heading.style.display = 'block';

})
