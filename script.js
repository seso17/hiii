const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => { 
  question.innerHTML = "I love you the mostest!";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWxhd3J2MWQ1N2d0eWNybW5sZWc0MndmcmpnM2NvbDkyYm1xc3B4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif";
  yesBtn.remove();
  noBtn.remove();
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate the maximum X and Y positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  // Generate random positions for the No button
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Apply the random position to the No button
  noBtn.style.position = 'absolute';
  noBtn.style.left = randomX + 'px';
  noBtn.style.top = randomY + 'px';
});

