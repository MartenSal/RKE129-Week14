const images = ['profile_picture.jpg', 'mees2.jpeg', 'mees3.jpg', 'mees4.jpg'];
const targetImage = document.querySelector('.picture-box img');
let i = 1;
const fNameSpan = document.querySelector('#fName');
const lNameSpan = document.querySelector('#lName');
const ageSpan = document.querySelector('#age');
const emailSpan = document.querySelector('#email');
const phoneSpan = document.querySelector('#phone');
const locationSpan = document.querySelector('#location');

const skillsList = document.querySelector('#skills');
const technologiesList = document.querySelector('#technologies');
const languagesList = document.querySelector('#languages');

targetImage.addEventListener('click', () => {
    targetImage.style.opacity = '0';

    setTimeout(() => {
        targetImage.src = 'images/' + images[i];
        i++;

        if (i >= images.length) {
            i = 0;
        }

        targetImage.style.opacity = '1';
    }, 500);
});


window.onload = () => {
    fetch('cv-data.json')
        .then(response => response.json())
        .then(data => {

            console.log(data);

            fNameSpan.textContent = data.fName;
            lNameSpan.textContent = data.lName;
            ageSpan.textContent = data.age;
            emailSpan.textContent = data.email;
            phoneSpan.textContent = data.phone;
            locationSpan.textContent = data.location;



            for(let i = 0; i < data.skills.length; i++ ) {

                let li = document.createElement('li');
                li.innerHTML = data.skills[i];

                skillsList.appendChild(li);

            }
            for(let i = 0; i < data.technologies.length; i++ ) {

                let li = document.createElement('li');
                li.innerHTML = data.technologies[i];

                technologiesList.appendChild(li);

            }
            for(let i = 0; i < data.languages.length; i++ ) {

                let li = document.createElement('li');
                li.textContent = data.languages[i];
                languagesList.appendChild(li);

            }
            

        })

};

