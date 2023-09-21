const customDiv = document.createElement("div");

const randomText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla augue nec libero malesuada, id finibus turpis consectetur. Nullam tincidunt bibendum purus, eu consectetur est blandit nec. Praesent ut malesuada est. Nulla facilisi. Aliquam ac efficitur elit. Duis eu est vitae arcu venenatis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed sed nisi neque. Aliquam a dolor in quam tincidunt lacinia. Sed vitae sodales libero, nec dapibus urna. Etiam fringilla metus eu quam vehicula, vel vehicula erat tristique. Aenean et ex vel libero ullamcorper faucibus. Sed lacinia nunc eu augue sagittis, id lacinia lectus sodales. Morbi id erat vitae purus pharetra aliquet. Nullam vel eros eu ex cursus egestas vel sit amet ipsum.";

customDiv.textContent = randomText;

customDiv.style.boxSizing = "border-box";
customDiv.style.textAlign = "center";
customDiv.style.padding = "13px";
customDiv.style.margin = "10px";
customDiv.style.position = "relative";
customDiv.style.minHeight = "406px";
customDiv.style.display = "flex";
customDiv.style.justifyContent = "center";
customDiv.style.alignItems = "center";
customDiv.style.boxShadow = "1px 1px 5px 5px #f1f1f1";
customDiv.style.borderRadius = "10px";
customDiv.style.background = "#fff";

const products = document.querySelectorAll(".product-item");

if (products.length >= 4) {
  const fourthProduct = products[3];
  fourthProduct.parentNode.insertBefore(customDiv, fourthProduct.nextSibling);
}

const applyResponsiveStyles = () => {
  let maxHeight = 0;
  const productCards = document.querySelectorAll(".top_section");

  productCards.forEach((productItem) => {
    const height = productItem.clientHeight;
    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  customDiv.style.height = `${maxHeight}px`;

  if (window.innerWidth < 768) {
    customDiv.style.width = "100%";
  } else if (window.innerWidth < 1200) {
    customDiv.style.width = "66.67%";
  } else {
    customDiv.style.width = "calc(50% - 20px)";
  }
};

applyResponsiveStyles();

window.addEventListener("resize", applyResponsiveStyles);
