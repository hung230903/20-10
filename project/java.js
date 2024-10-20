onload = () => {
    document.body.classList.add("not-loaded");

    document.addEventListener('click', function() {
        const backgroundMusic = document.getElementById('background-music');
        backgroundMusic.play();

        // Delay the animation by 5 seconds
        setTimeout(() => {
            document.body.classList.remove("not-loaded");
        }, 10000); // 5000ms = 5 seconds
    });
};
