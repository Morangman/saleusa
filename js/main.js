$(".popular-categories__slider").lightSlider({
    controls: false,
    item: 6,
    loop: true,
    responsive: [
      {
        breakpoint: 1917,
        settings: {
          item: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          item: 2,
        },
      },
    ],
  });
  $(".shoes-list-slider").lightSlider({
    controls: false,
    item: 6,
    loop: true,
    responsive: [
    {
        breakpoint: 1917,
        settings: {
          item: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          item: 3
        }
      },
    ]
  });
  $(".bags-list-slider").lightSlider({
    controls: false,
    item: 6,
    loop: true,
    responsive: [
    {
        breakpoint: 1917,
        settings: {
          item: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          item: 3
        }
      },
    ]
  });
  $(".brands-list-slider").lightSlider({
    controls: false,
    item: 6,
    loop: true,
    responsive: [
      {
        breakpoint: 1817,
        settings: {
          item: 5
        }
      },
      {
        breakpoint: 767,
        settings: {
          item: 3
        }
      }
    ]
  });

document
.querySelector(".header-search-clear-button")
.addEventListener("click", (ev) => {
  document.querySelector(".header-search-input").value = "";
});

document.getElementById("toggle_contacts")
.addEventListener("click", (ev) =>{
  ev.preventDefault();
  document.querySelector(".contacts-dropdown").classList.toggle("shown");
});