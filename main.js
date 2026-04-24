lucide.createIcons();
      const menuToggle = document.getElementById("menu-toggle");
      const closeMenu = document.getElementById("close-menu");
      const mobileMenu = document.getElementById("mobile-menu");
      const mobileLinks = document.querySelectorAll(".mobile-link");

      const openMenu = () => {
        mobileMenu.classList.add("active");
        document.body.style.overflow = "hidden";
      };

      const hideMenu = () => {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "auto";
      };

      menuToggle.addEventListener("click", openMenu);
      closeMenu.addEventListener("click", (e) => {
        e.stopPropagation();
        hideMenu();
      });
      mobileMenu.addEventListener("click", (e) => {
        if (e.target === mobileMenu) hideMenu();
      });
      mobileLinks.forEach((link) => link.addEventListener("click", hideMenu));

      (function () {
        const btn = document.getElementById("contact-button");
        if (btn) {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href =
              "mailto:contact@pearaty.com";
          });
        }
      })();

      const modal = document.getElementById("imageModal");
      const img = document.getElementById("flowImage");
      const modalImg = document.getElementById("modalImg");

      img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        document.body.style.overflow = "hidden";
      };
      modal.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      };

      document.getElementById("contact-button").onclick = () => {
        window.location.href =
          "mailto:contact@pearaty.com";
      };