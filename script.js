// LOAD SKILLS BAR

function loadSkillBar () {
  // Obtén las barras de habilidades por sus clases y establece sus anchos

  var skillBars = document.querySelectorAll('.skills__html, .skills__css, .skills__js, .skills__react, .skills__node, .skills__mongodb');

  // Establece sus anchos y agrega la animación
  for (var i = 0; i < skillBars.length; i++) {
    skillBars[i].style.transition = 'width 3s';
  }

  setTimeout(function() {
    document.querySelector('.skills__html').style.width = '90%';
    document.querySelector('.skills__css').style.width = '50%';
    document.querySelector('.skills__js').style.width = '30%';
    document.querySelector('.skills__react').style.width = '30%';
    document.querySelector('.skills__node').style.width = '40%';
    document.querySelector('.skills__mongodb').style.width = '50%';
    document.querySelector('.skills__express').style.width = '50%';

  }, 1000);
};

loadSkillBar();

// SKILLS TOGGLE SECTION

const skillsContent = document.getElementsByClassName("skills__content_dev"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content_dev skills__close";
  }
  if (itemClass === "skills__content_dev skills__close") {
    this.parentNode.className = "skills__content_dev skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

// ANIMATED TITLES

// creamos una funcion con el id del elemento y la animacion de cada uno
function toggleAnimationId() {
      const animations = {
      'bounceInDown': "animate__bounceInDown",
      'bounceInLeft': "animate__bounceInLeft",
      'bounceInRight': "animate__bounceInRight",
      'lightSpeedInLeft': "animate__lightSpeedInLeft",
      'fadeInTopLeft': "animate__fadeInTopLeft",
      'lightSpeedInRight': "animate__lightSpeedInRight",
    };

    // recorremos cada par clave(id)-valor(animacion) del objeto
    Object.entries(animations).forEach(([id, animationClass]) => {
      const element = document.getElementById(id);

      if (element) {
        element.classList.add('animate__animated', animationClass);

        setTimeout(function () {
          element.classList.remove(animationClass, "animate__animated");
        }, 2000);
      }
  });
} 

function toggleAnimationClass() {
  const animations = {
    'shakeX': 'animate__shakeX',
    'flipInX': 'animate__flipInX',
    'heartBeat': 'animate__heartBeat',
  };

  Object.entries(animations).forEach(([className, animacionClass]) => {
    const elements = document.getElementsByClassName(className);

    // debemos iterar cada elemento sobre la colección que devuelve "getelementByClassName" y aplicar la animación
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i]

      element.classList.add('animate__animated', animacionClass);

      setTimeout(function () {
        element.classList.remove(animacionClass, 'animate__animated');
      }, 5000); 
    }
  });
}

toggleAnimationId();
toggleAnimationClass();

setInterval(toggleAnimationId, 30000);
setInterval(toggleAnimationClass, 10000);