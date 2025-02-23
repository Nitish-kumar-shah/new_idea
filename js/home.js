//***********set-date*************** */
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//***********************close link*** */
const navToggle = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  //   linkContainer.classList.toggle("show-links");
  const containerHeight = linkContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linkContainer.style.height = `${linksHeight}px`;
  } else {
    linkContainer.style.height = 0;
  }
});

//****************smooth scroll**************** */
//select links
