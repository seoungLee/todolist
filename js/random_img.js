const images = ["0.jpg", "1.jpg", "2.jpg"];

const randomImg = document.querySelector("#randomImg");

const choImage = images[Math.floor(Math.random() * images.length)];

randomImg.src = `img/${choImage}`;