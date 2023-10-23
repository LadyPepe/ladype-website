$(document).ready(function () {
  //s1
  const sectionCustoms = document.querySelectorAll(".section_custom");

  function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  function handleSectionAnimations() {
    sectionCustoms.forEach((section, index) => {
      if (isElementVisible(section)) {
      }
    });
  }

  window.addEventListener("load", handleSectionAnimations);
  window.addEventListener("scroll", handleSectionAnimations);

  //S2
  var introductionBox = $(".introduction-box");
  var elementsToAnimate = introductionBox.find(".img-int img");
  var introAnimationStarted = false;

  $(window).scroll(function () {
    var introWindowHeight = $(window).height();
    var introScrollPosition = $(window).scrollTop();
    var introSectionTop = introductionBox.offset().top;
    var introSectionHeight = introductionBox.height();
    var introTriggerPoint = introSectionTop + introSectionHeight * 0.5;

    if (
      !introAnimationStarted &&
      introScrollPosition + introWindowHeight >= introTriggerPoint
    ) {
      elementsToAnimate.each(function (index, element) {
        setTimeout(function () {
          $(element).addClass("active");
        }, 500 * index);
      });

      introductionBox.addClass("active");
      introAnimationStarted = true;
    }
  });

  //S3
  var utilitySection = $("#utility");
  var boxes = utilitySection.find(".icon-container");
  var h2Elements = utilitySection.find("h3");
  var animationStarted = false;

  $(window).scroll(function () {
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();
    var sectionTop = utilitySection.offset().top;
    var sectionHeight = utilitySection.height();
    var triggerPosition = sectionTop + sectionHeight * 0.5;

    if (!animationStarted && scrollPosition + windowHeight >= triggerPosition) {
      boxes.each(function (index, box) {
        setTimeout(function () {
          $(box).addClass("active");
        }, 500 * index);
      });

      h2Elements.each(function (index, h2Element) {
        setTimeout(function () {
          $(h2Element).addClass("active");
        }, 500 * index);
      });

      animationStarted = true;
    }
  });

  //S4
  var teamMembersLeft = $(".team-member.team-left");
  var teamMembersRight = $(".team-member:not(.team-left)");
  var boxTitles = $(".box-title");

  function checkVisible(element) {
    var windowTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var elementTop = element.offset().top;

    return elementTop - windowTop <= windowHeight * 0.8;
  }

  $(window).scroll(function () {
    teamMembersLeft.each(function () {
      var element = $(this);

      if (checkVisible(element)) {
        element.css("animation", "slideInFromLeft 3s ease-in-out");
        element.css("opacity", "1");
        element.css("transform", "translateX(0)");
      }
    });

    teamMembersRight.each(function () {
      var element = $(this);

      if (checkVisible(element)) {
        element.css("animation", "slideInFromRight 3s ease-in-out");
        element.css("opacity", "1");
        element.css("transform", "translateX(0)");
      }
    });

    boxTitles.each(function () {
      var element = $(this);

      if (checkVisible(element)) {
        element.css("animation", "fade-in 1.5s ease");
        element.css("opacity", "1");
        element.css("transform", "translateY(0)");
      }
    });
  });

  //S5
  function activateAnimation() {
    var elementsToAnimate = $(".roadmap-box-xl");
    var titlesToAnimate = $(".roadmap-title"); 

    elementsToAnimate.each(function (index, element) {
      var elementTop = $(element).offset().top;
      var windowHeight = $(window).height();
      var triggerPoint = windowHeight * 0.0;

      if (elementTop - $(window).scrollTop() <= windowHeight - triggerPoint) {
        $(element).addClass("active");
        $(titlesToAnimate[index]).addClass("active"); 
      }
    });
  }

  activateAnimation();

  $(window).scroll(activateAnimation);

  //S6
  function activateTokenomicsAnimation() {
    const tokenomicsSection = document.querySelector(".class-Tokenomics");
    if (!tokenomicsSection) return;

    const windowHeight = window.innerHeight;
    const elementTop = tokenomicsSection.getBoundingClientRect().top;

    if (elementTop <= windowHeight * 0.5) {
      tokenomicsSection.classList.add("active");
    } else {
      tokenomicsSection.classList.remove("active");
    }
  }

  window.addEventListener("scroll", activateTokenomicsAnimation);

  activateTokenomicsAnimation();

  //S7
  function handleFooterAnimation() {
    const footer = document.querySelector("footer");
    const rect = footer.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight * 0.5) {
      footer.style.opacity = 1;
      window.removeEventListener("scroll", handleFooterAnimation);
    }
  }

  window.addEventListener("scroll", handleFooterAnimation);
});