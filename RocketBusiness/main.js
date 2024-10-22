import './style.scss';

document.querySelectorAll('.toggleButton').forEach(button => {
    button.addEventListener('click', function() {
        const formModal = document.getElementById('formModal');
        const coverBackground = document.querySelector('.cover_background');

        if (coverBackground.classList.contains('show')) {
            coverBackground.classList.remove('show');
            formModal.classList.remove('show');

            setTimeout(() => {
                coverBackground.style.display = 'none';
            }, 300);
        } else {
            coverBackground.style.display = 'flex';
            setTimeout(() => {
                coverBackground.classList.add('show');
                formModal.classList.add('show');
            }, 10);
        }
    });
});

const coverBackground = document.querySelector('.cover_background');
const formModal = document.getElementById('formModal');

document.getElementById("requestForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;
    const nameField = document.getElementById("name");
    const phoneField = document.getElementById("phone");

    document.getElementById("nameError").style.display = "none";
    document.getElementById("phoneError").style.display = "none";
    nameField.classList.remove("error");
    phoneField.classList.remove("error");

    if (nameField.value.trim() === "") {
        valid = false;
        document.getElementById("nameError").style.display = "block";
        nameField.classList.add("error");
    }

    if (phoneField.value.trim() === "") {
        valid = false;
        document.getElementById("phoneError").style.display = "block";
        phoneField.classList.add("error");
    }

    if (valid) {
        alert("Форма отправлена!");

        formModal.classList.remove('show');
        coverBackground.classList.add('fade-out');

        setTimeout(() => {
            coverBackground.style.display = 'none';
        }, 300);
    }
});

document.getElementById("playButton").addEventListener("click", function(event) {
    event.preventDefault();
    const videoBlock = document.getElementById("videoBlock");
    const videoContainer = document.getElementById("videoContainer");

    videoBlock.style.display = "none";
    videoContainer.style.display = "block";
});

document.getElementById("closeButton").addEventListener("click", function(event) {
    event.preventDefault();
    const videoBlock = document.getElementById("videoBlock");
    const videoContainer = document.getElementById("videoContainer");

    videoBlock.style.display = "flex";
    videoContainer.style.display = "none";
});

document.getElementById("closeModal").addEventListener("click", function() {
    formModal.classList.remove('show');
    coverBackground.classList.remove('show');

    setTimeout(() => {
        coverBackground.style.display = 'none';
    }, 300);
});
