// SKILLS SECTION

const skillsContent = document.getElementsByClassName("skills__content_dev"),
  skillsHeader = document.querySelectorAll(".skills__header")

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content_dev skills__close"
  }
  if (itemClass === "skills__content_dev skills__close") {
    this.parentNode.className = "skills__content_dev skills__open"
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
})