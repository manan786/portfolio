// import "./assets/css/magnific-popup.css";
// import "./assets/css/odometer-theme-default.css";
// import "./assets/css/owl.carousel.min.css";
// import "./assets/css/style.css";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// Pages
import HomePage from "./pages/Home";
import { useEffect } from "react";

//
// const loadScript = (src: string) => {
//   return new Promise<void>((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.async = true;
//     script.onload = () => resolve();
//     script.onerror = () => reject(new Error(`Failed to load script ${src}`));
//     document.body.appendChild(script);
//   });
// };

function App() {

  useEffect(() => {
    const loadScripts = async () => {
      try {
        // await loadScript("/js/jquery-3.3.1.min.js");
        // await loadScript("/js/popper.min.js");
        // await loadScript("/js/bootstrap.min.js");
        // await loadScript("/js/imagesloaded.pkgd.min.js");
        // await loadScript("/js/isInViewport.jquery.js");
        // await loadScript("/js/jquery.magnific-popup.min.js");
        // await loadScript("/js/scrolla.jquery.min.js");
        // await loadScript("/js/jquery.validate.min.js");
        // await loadScript("/js/jquery-validate.bootstrap-tooltip.min.js");
        // await loadScript("/js/odometer.min.js");
        // await loadScript("/js/owl.carousel.min.js");
        // await loadScript("/js/custom.hero.js");
        // await loadScript("/js/custom.js");
        console.log("All scripts loaded successfully");
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    loadScripts();

    // Optional cleanup function to remove scripts when component unmounts
    return () => {
      const scriptElements = document.querySelectorAll(
        'script[src*="assets/js/"], script[src*="/js/"]'
      );
      scriptElements.forEach((script) => script.remove());
    };
  }, []);

  //
  return (
    <div className="ts-page-wrapper" id="page-top">
      <HomePage />
    </div>
  );
}

export default App;
library.add(fab, fas, far);
