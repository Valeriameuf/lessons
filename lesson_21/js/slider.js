function slider(slideWidth, slideHeight) {
  document.querySelector(".slider").style.width = `${slideWidth}px`;
  document
    .querySelectorAll(".slider__item")
    .forEach((item) => (item.style.width = `${slideWidth}px`));
  document
    .querySelectorAll(".slider__img")
    .forEach((img) => (img.style.height = `${slideHeight}px`));
  const nextBtn = document.querySelector(".slider__next");
  const sliderList = document.querySelector(".slider__list");
  let isSliderRun = false;
  nextBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (isSliderRun) {
      return;
    }
    isSliderRun = true;
    const sliderLeft = parseFloat(sliderList.style.left || 0);
    let newLeft = sliderLeft - slideWidth;
    if (sliderLeft === -5 * slideWidth) {
      newLeft = 0;
    }
    const intervalId = setInterval(() => {
      let left = parseInt(sliderList.style.left || 0);
      left -= 10;
      if (left <= newLeft) {
        clearInterval(intervalId);
        sliderList.style.left = `${newLeft}px`;
        isSliderRun = false;
        return;
      }
      sliderList.style.left = `${left}px`;
    }, 5);
  });

  const prevBtn = document.querySelector(".slider__prev");
  prevBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (isSliderRun) {
      return;
    }
    isSliderRun = true;
    const sliderLeft = parseFloat(sliderList.style.left || 0);
    let newLeft = sliderLeft + slideWidth;
    if (sliderLeft === 0) {
      newLeft = -5 * slideWidth + slideWidth;
      sliderList.style.left = `${-5 * slideWidth}px`;
    }
    const intervalId = setInterval(() => {
      let left = parseInt(sliderList.style.left || 0);
      left += 10;
      if (left >= newLeft) {
        clearInterval(intervalId);
        sliderList.style.left = `${newLeft}px`;
        isSliderRun = false;
        return;
      }
      sliderList.style.left = `${left}px`;
    }, 5);
  });
}

slider(1000, 600);
