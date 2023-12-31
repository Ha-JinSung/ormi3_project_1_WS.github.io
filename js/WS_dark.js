document.getElementById('Dark_Btn').addEventListener("click", function() {
    const body = document.querySelector("body");
    body.classList.toggle("dark_mode");

    const $WS_Title = document.querySelector('#WS_Title');
    const $WS_DarkMode = document.querySelector('#WS_DarkMode');
    if (body.classList.contains('dark_mode')) {
        $WS_Title.src = 'css/img/WSdark.png';
        $WS_DarkMode.src = 'css/img/WS_moon.png';
        localStorage.setItem('darkMode', 'true');
        this.checked = true;
    } else {
        $WS_Title.src = 'css/img/WS.JPG';
        $WS_DarkMode.src = 'css/img/WS_sun.png';
        localStorage.setItem('darkMode', 'false');
        this.checked = false;
    }
});

window.addEventListener("load", function() {
    const bodyElement = document.body;
    const $WS_Title = document.querySelector('#WS_Title');
    const $WS_DarkMode = document.querySelector('#WS_DarkMode');

    if (localStorage.getItem('darkMode') === "true") {
        bodyElement.classList.add("dark_mode");
        $WS_Title.src = 'css/img/WSdark.png';
        $WS_DarkMode.src = 'css/img/WS_moon.png';
    } else {
        bodyElement.classList.remove("dark_mode");
        $WS_Title.src = 'css/img/WS.JPG';
        $WS_DarkMode.src = 'css/img/WS_sun.png';
    }
});