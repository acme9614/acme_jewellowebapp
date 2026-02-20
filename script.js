const menuToggle = document.getElementById("menu-toggle");
const drawer = document.getElementById("drawer");
const closeDrawer = document.getElementById("close-drawer");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  drawer.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
});

closeDrawer.addEventListener("click", () => {
  drawer.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  drawer.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

// drawers menu

function sendToApp(message) {
  if (window.Toaster && typeof Toaster.postMessage === "function") {
    // Running inside Flutter WebView
    Toaster.postMessage(message);
  } else {
    // Running in normal browser
    window.parent.postMessage(message, "*");
    console.log(message+" function called");
    
  }
}


function navigateToScheme() {
  sendToApp("navigateScheme");
}

function navigateToCatalogues() {
   sendToApp("navigateToCatalogues");
}

function navigateToQuickPurchase() {
   sendToApp("navigateToQuickPurchase");
}

function navigateToBankDetails() {
  sendToApp("navigateBankDetails");
}

function navigateToKyc() {
  sendToApp("navigateKyc");
}

function navigateToRate() {
   sendToApp("navigateRate");
}

function navigateSchemeRecords() {
  sendToApp("navigateSchemeRecords");
}

function navigateToCustomerCard() {
  sendToApp("navigateCustomerCard");
}

function navigateTransactionHistory() {
   sendToApp("navigateTransactionHistory");
}

function navigateToMyOrder() {
  sendToApp("navigateToMyOrder");
}

function navigateToUserProfile() {
   sendToApp("navigateToUserProfile");
}

function navigateToDigitalGold() {
   sendToApp("navigateToDigitalGold");
}

function navigateToPanchang() {
   sendToApp("navigateToPanchang");
}

function navigateToFeedback() {
  sendToApp("navigateToFeedback");
}

function navigateToSetting() {
  sendToApp("navigateToSetting");
}

function setUserName(username) {
  // Find the element by ID and set the text content
  document.getElementById("user-name-display").innerText =
    "Welcome, " + username;
}
function navigateToHomePage() {
   sendToApp("navigateToHomePage");
}

     AOS.init({
      duration: 600,
      once: false
    });


// brandingSwiper 
const swiper = new Swiper(".brandingSwiper", {
        effect: "coverflow",
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        coverflowEffect: {
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          autoplayTimeLeft(s, time, progress) {
            const circle = document.querySelector(".autoplay-progress svg");
            const content = document.querySelector(".autoplay-progress span");
            circle.style.setProperty("--progress", 1 - progress);
            content.textContent = `${Math.ceil(time / 1000)}s`;
          },
        },
      });



       // services

      AOS.init({
        duration: 800,
        once: false,
        disable: false, // 👈 Add this line
      });

      let expanded = false;
      function toggleBoxes() {
        const container = document.getElementById("boxContainer");
        const arrow = document.getElementById("arrowIcon");

        if (!expanded) {
          container.classList.remove("max-h-[15.5rem]");
          arrow.classList.add("rotate-180");
          expanded = true;
        } else {
          container.classList.add("max-h-[15.5rem]");
          arrow.classList.remove("rotate-180");
          expanded = false;
        }
      }

