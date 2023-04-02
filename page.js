fetch("https://miapi.com/products")
  .then(response => response.json())
  .then(products => {
    const grid = document.getElementById("product-grid");

    products.forEach(product => {
      const card = document.createElement("product-card");
      card.setAttribute("image", product.image);
      card.setAttribute("title", product.name);
      card.setAttribute("description", product.description);
      grid.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error al obtener los productos:", error);
  });
