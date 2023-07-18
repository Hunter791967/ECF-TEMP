//****************************************************/
// This function is for Creating a Countdown Timer

// Set the date we're counting down to
var countDownDate = new Date("October 06, 2023 12:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the Days element with id="days"
  document.getElementById("days").innerHTML = days;

  // Display the result in the Hours element with id="hours"
  document.getElementById("hours").innerHTML = hours;

  // Display the result in the Minutes element with id="minutes"
  document.getElementById("minutes").innerHTML = minutes;

  // Display the result in the Seconds element with id="seconds"
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = " ";
    document.getElementById("hours").innerHTML = " ";
    document.getElementById("minutes").innerHTML = " ";
    document.getElementById("seconds").innerHTML = " ";
    document.getElementById("days_text").style.cssText = "display: none";
    document.getElementById("hours_text").style.cssText = "display: none";
    document.getElementById("minutes_text").style.cssText = "display: none";
    document.getElementById("seconds_text").style.cssText = "display: none";
    document.getElementById("expired").style.cssText = "display: flex";
  }
}, 1000);
//*******************************************************/
//********************************************/
// This fucntion is for automatic slider using setinterval
let increment = 1;
setInterval(function () {
  document.getElementById("radio" + increment).checked = true;
  increment++;
  // console.log(increment);
  if (increment > 24) {
    increment = 1;
  }
}, 7000);

//****************************************************/
//********************************************/
// This fucntion is for automatic slider using setinterval
let auto = 25;
setInterval(function () {
  document.getElementById("radio" + auto).checked = true;
  auto++;
  if (auto > 33) {
    auto = 25;
  }
}, 5500);

// ****************************************************/
// scrol from bottom to top

let scrollBtn = document.getElementById("scrollBtn");
scrollBtn.addEventListener("click", (eventSeven) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// ***********slider lost******************
$(document).ready(function () {
  $(".carousel").carousel();
});

// fade-in-out animation
const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", check_animation);
check_animation();

function check_animation() {
  const trigger = (window.innerHeight / 6) * 4;
  boxes.forEach((box) => {
    const top = box.getBoundingClientRect().top;
    if (trigger > top) {
      box.classList.add("show_content");
    } else {
      box.classList.remove("show_content");
    }
  });
}

// history slider
var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mouseWheel: {
    invert: false,
  },
  // autoHeight: true
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
});

// agenda FEDERATION CUP
// function 1
let agenda = document.querySelector(".agenda");
let agendaCcontainer = document.querySelector(".agend1");
let agenda2 = document.querySelector(".agend2");
let agenda3 = document.querySelector(".agend3");
agenda.addEventListener("click", function () {
  agendaCcontainer.classList.toggle("show-agenda");
  agenda2.classList.toggle("show-agenda");
  agenda3.classList.toggle("show-agenda");
});

// function 2

let buttonn = document.querySelectorAll(".btnn");

buttonn.forEach((btn) => {
  btn.addEventListener("click", function () {
    var frog = window.open(
      "",
      "galary",
      "width=800,height=300,scrollbars=1,resizable=1,top=50"
    );
    var img;
    if (btn.classList.contains("btn1")) {
      img = `<!-- gallery item start -->
                    <div class="gallery-item shoe ">
                        <div class="gallery-item-inner">
                            <img src="../images/championship_images/federation-cup-title.jpg" alt="shoe">
                        </div>
                    </div>
                  <!-- gallery item end -->
                  <!-- gallery item start -->
                  <div class="gallery-item shoe ">
                      <div class="gallery-item-inner">
                          <img src="../images/championship_images/federation-cup-2.jpg" alt="shoe">
                      </div>
                  </div>
                  <!-- gallery item end -->
                  <!-- gallery item start -->
                  <div class="gallery-item shoe ">
                      <div class="gallery-item-inner">
                          <img src="../images/championship_images/federation-cup-3.jpg" alt="shoe">
                      </div>
                  </div>
                  <!-- gallery item end -->
            `;
      tittle = "FEDERATION CUP";
    } else if (btn.classList.contains("btn2")) {
      img = `<!-- gallery item start -->
          <div class="gallery-item shoe ">
              <div class="gallery-item-inner">
                  <img src="../images/championship_images/egyption-cup2.jpg" alt="shoe">
              </div>
          </div>
        <!-- gallery item end -->
  `;
      tittle = "EGYPTIAN CUP";
    } else if (btn.classList.contains("btn3")) {
      img = `<!-- gallery item start -->
          <div class="gallery-item shoe ">
              <div class="gallery-item-inner">
                  <img src="../images/championship_images/EGYPT-INTERNATIONAL-title.jpg" alt="shoe">
              </div>
          </div>
        <!-- gallery item end -->
  `;
      tittle = "EGYPT INTERNATIONAL";
    } else if (btn.classList.contains("btn4")) {
      img = `<!-- gallery item start -->
          <div class="gallery-item shoe ">
              <div class="gallery-item-inner">
                  <img src="../images/championship_images/egyption-league-title.jpg" alt="shoe">
              </div>
          </div>
        <!-- gallery item end -->
        <!-- gallery item start -->
        <div class="gallery-item shoe ">
            <div class="gallery-item-inner">
                <img src="../images/championship_images/egyption-league-1.jpg" alt="shoe">
            </div>
        </div>
        <!-- gallery item end -->
        <!-- gallery item start -->
        <div class="gallery-item shoe ">
          <div class="gallery-item-inner">
            <img src="../images/championship_images/egyption-league-2.jpg" alt="shoe">
          </div>
        </div>
        <!-- gallery item end -->
        <!-- gallery item start -->
        <div class="gallery-item shoe ">
          <div class="gallery-item-inner">
            <img src="../images/championship_images/egyption-league-3.jpg" alt="shoe">
          </div>
        </div>
        <!-- gallery item end -->
        <!-- gallery item start -->
        <div class="gallery-item shoe ">
          <div class="gallery-item-inner">
            <img src="../images/championship_images/egyption-league-4.jpg" alt="shoe">
          </div>
        </div>
        <!-- gallery item end -->
        <!-- gallery item start -->
        <div class="gallery-item shoe ">
          <div class="gallery-item-inner">
            <img src="../images/championship_images/egyption-league-5.jpg" alt="shoe">
          </div>
        </div>
        <!-- gallery item end -->
  `;
      tittle = "EGYPTIAN LEAGUE";
    }

    var html = `<html>
                        <head> 
                            <link rel=stylesheet href=../css/agenda.css>
                            <title>${tittle}</title> 

                        </head>
                        <body>
                            <section class="gallery">
                                <div class="containerr">
                                    <div class="row">
                                        <!-- gallery item start -->
                                            ${img}
                                        <!-- gallery item end -->
                                    </div>
                                </div>
                            </section>
                        </body>
                    </html>`;

    frog.document.open();
    frog.document.write(html);
    frog.document.close();

    console.log("hijugh");
  });
});
