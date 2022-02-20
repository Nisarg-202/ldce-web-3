setTimeout(function () {
  var myModal = new bootstrap.Modal(document.getElementById("aajadiModal"));
  myModal.toggle();
}, 2000);

$(".achievements-cards").owlCarousel({
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
  margin: 20,
});

$(".placement-cards").owlCarousel({
  items: 8,
  margin: 20,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 6,
    },
    1000: {
      items: 8,
    },
  },
});

document
  .querySelector(".vision-clickable-text")
  .addEventListener("click", function (e) {
    document
      .querySelector(".mission-clickable-text")
      .classList.remove(
        "add-background-to-vision-mission",
        "add-text-color-white-to-vision-mission"
      );
    document
      .querySelector(".vision-clickable-text")
      .classList.add(
        "add-background-to-vision-mission",
        "add-text-color-white-to-vision-mission"
      );
    document.querySelector(
      ".vision-mission-data"
    ).innerHTML = `<p class="vision-description mt-3">
    <i class="far fa-hand-point-right"></i> <span></span>
    To contribute for sustainable development of nation through achieving
    excellence in technical education and research while facilitating
    transformation of students into responsible citizens and competent
    professionals.
  </p>`;
  });

document
  .querySelector(".mission-clickable-text")
  .addEventListener("click", function (e) {
    document
      .querySelector(".vision-clickable-text")
      .classList.remove(
        "add-background-to-vision-mission",
        "add-text-color-white-to-vision-mission"
      );
    document
      .querySelector(".mission-clickable-text")
      .classList.add(
        "add-background-to-vision-mission",
        "add-text-color-white-to-vision-mission"
      );
    document.querySelector(
      ".vision-mission-data"
    ).innerHTML = `<p class="mission-description mt-3">
    <i class="far fa-hand-point-right"></i> <span></span>
    To impart affordable and quality education in order to meet the needs of
    industries and achieve excellence in teaching-learning process.
  </p>
  <p class="mission-description mt-3">
    <i class="far fa-hand-point-right"></i> <span></span>
    To create a conducive research ambience that drives innovation and
    nurtures research-oriented scholars and outstanding professionals.
  </p>
  <p class="mission-description mt-3">
    <i class="far fa-hand-point-right"></i> <span></span>
    To collaborate with other academic & research institutes as well as
    industries in order to strengthen education and multidisciplinary
    research.
  </p>
  <p class="mission-description mt-3">
    <i class="far fa-hand-point-right"></i> <span></span>
    To promote equitable and harmonious growth of students, academicians,
    staff, society and industries, thereby becoming a center of excellence
    in technical education.
  </p>
  <p class="mission-description mt-3">
    <i class="far fa-hand-point-right"></i> <span></span>
    To practise and encourage high standards of professional ethics,
    transparency and accountability.
  </p>`;
  });
