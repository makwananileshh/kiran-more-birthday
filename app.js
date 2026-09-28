const colleagueMessages = {
  urmila: {
    name: "Urmila",
    message: "May every target you set be conquered, every challenge become an achievement, and every success bring you even bigger goals! Have a wonderful birthday and a truly successful year ahead!",
    image: "urmila.jpeg",
    theme: "urmila"
  },
  fareeth: {
    name: "Fareeth",
    message: "Wishing you a very Happy Birthday, Sir! 🎂🙏 May you be blessed with good health, happiness, and continued success. Your leadership and guidance are truly inspiring—wishing you many more achievements and wonderful years ahead!",
    image: "fareeth.jpeg",
    theme: "fareeth"
  },
  ranjiv: {
    name: "Ranjiv",
    message: "Hearty birthday wishes, Sir! Thank you very much for your guidance and inspiration. I hope your coming year is filled with excellent health, immense success, and happiness.",
    image: "ranjiv.jpeg",
    theme: "ranjiv"
  },
  nilesh: {
    name: "Nilesh",
    message: "Happy Birthday to a manager who's only getting better with age… like fine wine! Or whisky. Definitely whisky at this point. Thanks for being awesome and not holding grudges against the team. Have a legendary day!",
    image: "nilesh.JPG",
    theme: "nilesh"
  },
  ganesh: {
    name: "Ganesh",
    message: "Happy birthday to a boss who leads with clarity, inspires with purpose, and supports with strength. Happy birthday! We've decided not to escalate anything today, as our gift.",
    image: "ganesh.jpeg",
    theme: "ganesh"
  },
  pratik: {
    name: "Pratik",
    message: "Happy Birthday Sir, wishing you a day filled with laughter, joy, and all the things that make you happiest. May this year bring you continued success, good health, and countless memorable moments. Thank you for being an incredible leader and mentor. Cheers to another year of greatness!",
    image: "pratik.jpeg",
    theme: "pratik"
  },
  maithili: {
    name: "Maithili",
    message: "Happy birthday! Thank you for your inspiring leadership and for always pushing us toward excellence",
    image: "maithili.jpeg",
    theme: "maithili"
  },
  saianush: {
    name: "Saianush",
    message: "Kam me apka andaz sabse nirala hai, Manager ke roop me apka jawab nahi koi dusra hai.😄 Guidance apki, support apka, aur team ke liye hamesha saath apka! 🙌  Dua hai aaj ka din khushiyo se bhar jaaye, aur ane wale saalo safalta ki naayi unchaiya dikhaye. 🌟 Happy Birthday Kiran Sir! 🎂🥳",
    image: "saianush.jpeg",
    theme: "saianush"
  },
  makwana: {
    name: "Makwana",
    message: "Wishing you 100% happiness, zero blockers, and an upward trend in everything that matters! 🚀🎉📊 Today’s KPI: 100% Happiness | 0% Stress | Infinite Growth. 📈😄 Happy Birthday, Sir! 🎂",
    image: "makwana.png",
    theme: "makwana"
  }
};

let activeColleague = null;

function change(str) {
  const entry = colleagueMessages[str];
  if (entry && activeColleague === str) return;

  activeColleague = entry ? str : null;
  const main = document.querySelector(".main");
  const content = document.createElement("div");
  const presentation = document.createElement("div");
  const heading = document.createElement("h1");
  const message = document.createElement("p");
  const image = document.createElement("img");

  content.className = "content";
  presentation.className = "presentation";

  if (entry) {
    content.classList.add(entry.theme);
    heading.textContent = entry.name;
    message.textContent = entry.message;
    image.src = `./images/${entry.image}`;
    image.alt = entry.name;
  } else {
    heading.textContent = "Colleagues";
    message.textContent = "Systems ho ya challenges, aap har problem ka solution nikaal dete ho, Hardware ho ya deadlines, sabko smoothly handle kar lete ho. Team ko guidance, aur kaam ko perfect direction dete ho, Har technical issue ko calmly troubleshoot kar dete ho. Aaj bas tickets, targets aur escalations ko side mein rakhiye, Happy Birthday Sir — aaj system nahi, bas celebration reboot kijiye! 🎂💻🎉";
    image.src = "./images/main.jpeg";
    image.alt = "Colleagues celebrating Kiran";
  }

  image.className = "displayImg";
  presentation.append(heading, message);
  content.append(presentation, image);
  main.replaceChildren(content);
  Animate();
}


let mouseCursor = document.querySelector(".cursor");
let navlinks = document.querySelectorAll(".nav-links li ");
let links = document.querySelectorAll(".buddies-links li");

window.addEventListener("mousemove", cursor);

function cursor(e) 
{
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

links.forEach((link) => 
{
  const activateColleague = () => change(link.dataset.colleague);

  link.addEventListener("mouseenter", activateColleague);
  link.addEventListener("click", activateColleague);
});

const buddiesLinks = document.querySelector(".buddies-links");
buddiesLinks.addEventListener("mouseenter", () => {
  mouseCursor.classList.add("buddies-link-grow");
});
buddiesLinks.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("buddies-link-grow");
});
navlinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
});

  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
});

function bgChanger() 
{
  if (this.scrollY > this.innerHeight / 1.2) 
  {
    document.body.classList.add("bg-active");
  } 
 else 
 {
    document.body.classList.remove("bg-active");
    document.body.classList.remove("bg-active");
  }
}
Animate();

function Animate() 
{
  const image = document.querySelector(".displayImg");
  const content = document.querySelector(".content");
  const presentation = document.querySelector(".presentation");

  if (!image || !content || !presentation || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  content.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 900,
    easing: "ease-in-out"
  });
  presentation.animate([
    { opacity: 0, transform: "translateX(-36px)" },
    { opacity: 1, transform: "translateX(0)" }
  ], {
    duration: 850,
    delay: 120,
    easing: "ease-in-out"
  });
  image.animate([
    { opacity: 0, transform: "translate(36px, -24px)" },
    { opacity: 1, transform: "translate(0, 0)" }
  ], {
    duration: 900,
    delay: 100,
    easing: "ease-in-out"
  });
}
window.addEventListener("scroll", bgChanger);

const birthdayNote = document.querySelector("#birthday-note");

if (birthdayNote && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
  birthdayNote.classList.add("reveal-pending");

  const birthdayNoteObserver = new IntersectionObserver((entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    birthdayNote.classList.add("is-visible");
    birthdayNote.classList.remove("reveal-pending");
    birthdayNoteObserver.unobserve(birthdayNote);
  }, { threshold: 0.25 });

  birthdayNoteObserver.observe(birthdayNote);
}

const headline = document.querySelector(".headline");
const home = document.querySelector(".home");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  home.animate([
    { opacity: 0.75, transform: "scale(0.985)" },
    { opacity: 1, transform: "scale(1)" }
  ], {
    duration: 1000,
    easing: "ease-in-out"
  });
  headline.animate([
    { opacity: 0, transform: "translateX(-30px)" },
    { opacity: 1, transform: "translateX(0)" }
  ], {
    duration: 1300,
    delay: 250,
    easing: "ease-in-out"
  });
}

const curtain = document.querySelector("#curtain");
const openCurtainButton = document.querySelector("#open-curtain");

function startCelebration() {
  const celebration = document.querySelector("#celebration");
  const colors = ["#d97465", "#e1b65c", "#729a87", "#6fa7d8", "#c38298", "#f4dfb3"];

  celebration.replaceChildren();

  for (let index = 0; index < 84; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.backgroundColor = colors[index % colors.length];
    piece.style.top = `${4 + Math.random() * 9}vh`;
    piece.style.setProperty("--burst-x", `${(Math.random() - 0.5) * window.innerWidth * 0.96}px`);
    piece.style.setProperty("--drift-x", `${(Math.random() - 0.5) * 240}px`);
    piece.style.setProperty("--spin", `${360 + Math.random() * 1260}deg`);
    piece.style.setProperty("--piece-width", `${5 + Math.random() * 8}px`);
    piece.style.setProperty("--piece-height", `${9 + Math.random() * 13}px`);
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    celebration.appendChild(piece);
  }

  for (let index = 0; index < 28; index += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle-piece";
    sparkle.style.top = `${6 + Math.random() * 18}vh`;
    sparkle.style.setProperty("--sparkle-x", `${(Math.random() - 0.5) * window.innerWidth * 0.78}px`);
    sparkle.style.width = `${6 + Math.random() * 9}px`;
    sparkle.style.height = sparkle.style.width;
    sparkle.style.backgroundColor = index % 2 ? "#fff8d8" : "#e6c56c";
    sparkle.style.animationDelay = `${Math.random() * 0.35}s`;
    celebration.appendChild(sparkle);
  }

  const balloonColors = ["#d6a18a", "#88a79a", "#c58b99", "#d6b967", "#91a9bd", "#d9c0a5"];
  for (let index = 0; index < balloonColors.length; index += 1) {
    const balloon = document.createElement("span");
    balloon.className = "balloon-piece";
    balloon.style.setProperty("--balloon-color", balloonColors[index]);
    balloon.style.setProperty("--balloon-x", `${(Math.random() - 0.5) * window.innerWidth * 0.66}px`);
    balloon.style.setProperty("--balloon-tilt", `${(Math.random() - 0.5) * 28}deg`);
    balloon.style.animationDelay = `${0.15 + index * 0.08}s`;
    celebration.appendChild(balloon);
  }

  window.setTimeout(() => celebration.replaceChildren(), 4300);
}

openCurtainButton.addEventListener("click", function () {
  if (curtain.classList.contains("is-open")) return;

  openCurtainButton.disabled = true;
  curtain.classList.add("is-open");
  document.body.classList.add("curtain-open");
  startCelebration();

  // Play birthday music from the beginning
  const birthdayMusic = document.querySelector("#birthdayMusic");

  if (birthdayMusic) {
    birthdayMusic.currentTime = 0;

    birthdayMusic.addEventListener("timeupdate", function stopMusic() {
      if (birthdayMusic.currentTime >= 13) {
        birthdayMusic.pause();
        birthdayMusic.currentTime = 0;
        birthdayMusic.removeEventListener("timeupdate", stopMusic);
      }
      birthdayMusic.play();
    }
});
