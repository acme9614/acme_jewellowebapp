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
    console.log(message + " function called");

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


//show all widgets tabs in Flutter App
//show specfic widgets in React Web Application

document.addEventListener("DOMContentLoaded", function () {
  // detect which Platform
  const isFlutterApp =
    window.Toaster && typeof Toaster.postMessage === "function";

  if (!isFlutterApp) {
    // Define which widgets React should show
    const allowedWidgets = [
      "scheme"
    ];
    // Filter Service Boxes textbased
    const boxes = document.querySelectorAll("#boxContainer > div");

    boxes.forEach((box) => {
      const text = box.innerText.trim().toLowerCase();

      const matched = allowedWidgets.some(widget =>
        text.includes(widget)
      );

      if (!matched) {
        box.style.display = "none";
      }
    });
    // Filter Drawer Menu
    const drawerLinks = document.querySelectorAll("#drawer nav a");

    drawerLinks.forEach((link) => {
      const linkText = link.innerText.trim().toLowerCase();

      const matched = allowedWidgets.some(widget =>
        linkText.includes(widget)
      );

      if (!matched) {
        link.style.display = "none";
      }
    });

     // Arrow Show in mobile View
    const visibleBoxes = Array.from(boxes).filter(
      box => box.style.display !== "none"
    );

    const toggleButton = document.querySelector(".sm\\:hidden");
    const container = document.getElementById("boxContainer");

    if (toggleButton && container) {

      if (visibleBoxes.length > 6) {
        // More than 6 → show arrow (mobile only)
        toggleButton.classList.remove("hidden");
        container.classList.add("max-h-[15.5rem]");
      } else {
        //6 or less → hide arrow
        toggleButton.classList.add("hidden");
        container.classList.remove("max-h-[15.5rem]");
      }
    }
  }
});
