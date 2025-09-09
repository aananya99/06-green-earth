const loadTreeCategory = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTreeCategory(data.categories));
};

const displayTreeCategory = (categories) => {
  const categoryNamesContainer = document.getElementById("category-names");
  categories.forEach((category) => {
    const categoryName = document.createElement("div");
    categoryName.innerHTML = `<div class="flex flex-col">
    <button onclick=" loadEachCategoryPlant(${category.id})"class="btn w-full shadow-sm hover:bg-[#166534] hover:text-white">${category.category_name}</button>
    </div>
    `;

    categoryNamesContainer.append(categoryName);
  });
};
loadTreeCategory();

const loadEachCategoryPlant = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayEachCategoryPlant(data.plants));
  document.getElementById("tree-card-container").style.display = "none";
  document.getElementById("category-plants").style.display = "grid";
};

const displayEachCategoryPlant = (details) => {
  const categoryPlants = document.getElementById("category-plants");
  categoryPlants.innerHTML = "";

  details.forEach((plant) => {
    const eachCategoryPlant = document.createElement("div");
    eachCategoryPlant.innerHTML = `<div class="card bg-base-100 overflow-hidden shadow-sm w-full h-[500px] ">
              <figure class="">
                <img 
                  src="${plant.image}"
                  alt=""
                  class="rounded-tr-xl rounded-tl-xl h-[300px] w-full object-cover"
                />
              </figure>
              <div class="card-body flex flex-col flex-grow items-start">
                <h2 onclick="loadPlantDetail(${plant.id})" class="card-title font-bold text-xl">${plant.name}</h2>
                <p class="text-[#1f2937] flex-grow ">
                  ${plant.description}
                </p>
                <div class="flex justify-between items-center gap-14 my-2">
                  <h3 class="text-[#15803d] font-semibold bg-[#dcfce7] rounded-full p-2">${plant.category}</h3>
                  <h3 class="text-[#15803d] font-semibold text-lg">৳${plant.price}</h3>
                </div>
                <button
                  class="btn text-white bg-[#15803d] font-semibold rounded-full border-none w-full"
                >
                  Add to Cart
                </button>
              </div>

            </div>
  `;
    categoryPlants.append(eachCategoryPlant);
  });
};

const loadPlantDetail = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlantDetail(data.plants));
};

const displayPlantDetail = (plants) => {
  const detailBox = document.getElementById("details-container");
  detailBox.innerHTML = `
  <div class="">
              <div class="card bg-base-100 shadow-sm w-full h-[500px] space-y-2 p-1">
                  <h2 class="card-title">${plants.name}</h2>
                  <figure>
                  <img
                    src="${plants.image}"
                    alt="Shoes" class="h-[300px] w-full object-cover rounded-xl"
                  />
                </figure>
                <h3><span class="font-semibold">Category:</span> ${plants.category}</h3>
                <h3><span class="font-semibold">Price:</span> ৳${plants.price}</h3>
                <p><span class="font-semibold">Description:</span> ${plants.description}</p>
              </div>
            </div>
  `;
  document.getElementById("plant_modal").showModal();
};

const loadAllPlants = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllPlants(data.plants));
  document.getElementById("tree-card-container").style.display = "grid";
  document.getElementById("category-plants").style.display = "none";
};

const displayAllPlants = (plants) => {
  const treeCardContainer = document.getElementById("tree-card-container");
  treeCardContainer.innerHTML = "";
  plants.forEach((plant) => {
    const treeCard = document.createElement("div");
    treeCard.innerHTML = `
    <div class="card bg-base-100 overflow-hidden shadow-sm w-full h-[500px]">
              <figure class="">
                <img 
                  src="${plant.image}"
                  alt=""
                  class="rounded-tr-xl rounded-tl-xl h-[300px] w-full object-cover"
                />
              </figure>
              <div class="card-body flex flex-col flex-grow items-start">
                <h2 onclick="loadPlantDetail(${plant.id})" class= "card-title font-bold text-xl">${plant.name}</h2>
                <p class="text-[#1f2937] flex-grow">
                  ${plant.description}
                </p>
                <div class="flex justify-between items-center gap-14 my-2">
                  <h3 class="text-[#15803d] font-semibold bg-[#dcfce7] rounded-full p-2">${plant.category}</h3>
                  <h3 class="text-[#15803d] font-semibold text-lg">৳${plant.price}</h3>
                </div>
                <button
                  class="btn text-white bg-[#15803d] font-semibold rounded-full border-none w-full"
                >
                  Add to Cart
                </button>
              </div>

            </div>
    `;
    treeCardContainer.append(treeCard);
  });
};
loadAllPlants();

// "plants": {
// "id": 10,
// "image": "https://i.ibb.co.com/50K7Cgv/amla-min.jpg",
// "name": "Amla Tree",
// "description": "A small to medium tree producing fruits rich in Vitamin C and antioxidants. Its fruits are used in Ayurvedic tonics for boosting immunity.",
// "category": "Medicinal Tree",
// "price": 550
// }
