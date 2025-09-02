// cta-form childrens name boxes

// const kidsInput = document.getElementById("kids");
// const childrenDiv = document.getElementById("children-names");

// kidsInput.addEventListener("input", function () {
//   childrenDiv.innerHTML = ""; // clear old fields
//   const num = parseInt(this.value, 5);
//   if (isNaN(num) || num <= 0) return;

//   for (let i = 1; i <= num; i++) {
//     const label = document.createElement("label");
//     label.setAttribute("for", "child" + i);
//     label.textContent = "Child " + i + " Name";

//     const input = document.createElement("input");
//     input.type = "text";
//     input.id = "child" + i;
//     input.name = "child" + i;

//     childrenDiv.appendChild(label);
//     childrenDiv.appendChild(input);
//   }
// });

//////////////////////////////////////////

// Make mobile nav work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl?.addEventListener("click", () => {
  headerEl?.classList.toggle("nav-open");
});

// Close menu + smooth-scroll for same-page hash links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    const dest = new URL(link.getAttribute("href"), window.location.href);

    // Normalize paths so "/" and "/index.html" are treated the same
    const normalize = (p) => p.replace(/\/index\.html?$/i, "/");
    const samePage =
      normalize(dest.pathname) === normalize(window.location.pathname);
    const hasHash = !!dest.hash;

    if (samePage && hasHash) {
      // Smooth-scroll to the target on the current page
      e.preventDefault();
      const target = document.querySelector(dest.hash);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }

    // Always close the mobile nav after a click
    headerEl?.classList.remove("nav-open");
  });
});

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
