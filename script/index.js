const loadTreeCategory = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTreeCategory(data.categories));
};

const displayTreeCategory = (categories) => {
  const categoryNamesContainer = document.getElementById("category-names");
  categories.forEach((category) => {
    const categoryName = document.createElement("li");
    categoryName.innerText = category.category_name;

    categoryNamesContainer.append(categoryName);
  });
};

loadTreeCategory();

// "categories": [
// {
// "id": 1,
// "category_name": "Fruit Tree",
// "small_description": "Trees that bear edible fruits like mango, guava, and jackfruit."
// },

const loadAllPlants = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllPlants(data.plants));
};

const displayAllPlants = (plants) => {
  const treeCardContainer = document.getElementById("tree-card-container");

  plants.forEach((plant) => {
    const treeCard = document.createElement("div");
    treeCard.innerHTML = `
    <div class="card bg-base-100 overflow-hidden shadow-sm w-full h-[500px]  ">
              <figure class="">
                <img 
                  src="${plant.image}"
                  alt=""
                  class="rounded-tr-xl rounded-tl-xl w-full bg-cover h-[300px]"
                />
              </figure>
              <div class="card-body flex flex-col flex-grow items-left">
                <h2 class="card-title font-bold text-xl">${plant.name}</h2>
                <p class="text-[#1f2937] flex-grow">
                  ${plant.description}
                </p>
                <div class="flex justify-between items-center my-2">
                  <h3 class="text-[#15803d] font-semibold bg-[#dcfce7] rounded-full p-2">${plant.category}</h3>
                  <h3 class="text-[#15803d] font-semibold text-lg">৳${plant.price}</h3>
                </div>
                <button
                  class="btn text-white bg-[#15803d] font-semibold rounded-full border-none mt-auto"
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

/*"plants": [
{
"id": 1,
"image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
"name": "Mango Tree",
"description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
"category": "Fruit Tree",
"price": 500
},*/

