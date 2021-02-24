const createHeader = function () {
    const header = document.createElement("header");
    header.classList.add("centered");
    header.classList.add("centered2");
    header.innerHTML = `
    <nav class="navMenu">
    <button class="aboutMe-button">About Me</button>
    <button class="project-button">Projects</a></button>
    <button class="resume-button">Resume</button>
</nav>`
    return header;
};

export { createHeader };