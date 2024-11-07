(function () {
  "use strict";
  if (document.getElementsByClassName("ts-full-screen").length) {
    document.getElementsByClassName("ts-full-screen")[0].style.height =
      window.innerHeight + "px";
  }

  // Get all nav links
  const navLinks = document.querySelectorAll(".nav-item.nav-link");

  // Function to set active link based on current URL hash
  const setActiveLink = () => {
    // Get the current hash (e.g., #my-services)
    const currentHash = window.location.hash;

    // Remove 'active' class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // If there's a hash in the URL, find the corresponding link and add 'active'
    if (currentHash) {
      const activeLink = document.querySelector(`a[href="${currentHash}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    } else {
      // If no hash, set 'Home' link as active by default
      navLinks[0].classList.add("active");
    }
  };

  // Add event listeners to each link for handling manual clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove 'active' class from all links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add 'active' class to the clicked link
      this.classList.add("active");
    });
  });

  // Run the function when the page loads
  setActiveLink();

  // Optional: Update the active link when the user navigates with the back/forward buttons
  window.addEventListener("hashchange", setActiveLink);
})();
