const images = ["https://cdn.pixabay.com/photo/2024/01/08/17/54/wren-8496039_1280.jpg",
				"https://cdn.pixabay.com/photo/2023/12/30/13/09/musicians-8478099_1280.jpg",
				"https://cdn.pixabay.com/photo/2023/12/26/05/02/duck-8469484_1280.jpg"
			   ];

const chosenImage = Math.floor(Math.random() * images.length);
const backgroundImage = `url(${images[chosenImage]}`;
document.body.style.backgroundImage = backgroundImage;
document.body.style.backgroundSize=cover;
document.body.style.backgroundAttachment=fixed;



