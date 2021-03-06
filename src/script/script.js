import "../style/style.css";
import itemsData from "../json/items.json";
import recipeData from "../json/data.json";
let { changelog, cookingTables, toolsRecipe, spicesRecipe, eggFoods } = recipeData;

var $_GET = {};
window.addEventListener("load", function (event) {
  var parts = window.location.search.substr(1).split("&");
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i].split("=");
    $_GET[decodeURIComponent(part[0])] = decodeURIComponent(part[1]);
  }

  switch ($_GET.goto) {
    case "recipe":
      document.getElementById("recipes-tab").click();
      break;
    case "changelog":
      document.getElementById("changelog-tab").click();
      break;
  }
});

const tombolMenu = document.getElementsByClassName("benda");

Array.from(tombolMenu).forEach((x) => {
  x.addEventListener("click", function () {
    document
      .querySelector(
        `.navbar.navbar-light.bg-light .container-fluid .nav.nav-tabs .nav-item #${
          Array.from(this.classList).filter((x) => x !== "benda")[0]
        }-tab`
      )
      .click();
  });
});

changelog.forEach((y) => {
  let listhasil = "";
  let list = y.added
    .filter((y) => y !== undefined)
    .forEach((x) => (listhasil += '<li class="list-group-item">' + x + "</li>"));

  let s = `<div class="row justify-content-md-center">
    <div class="col-md-4">
      <div class="mt-3 mx-3">
        <h4>
          <a class="text-reset text-decoration-none" data-bs-toggle="collapse" href="#${y.id}" role="button" aria-expanded="false" aria-controls="${y.id}" style="font-family: 'PT Sans', sans-serif;">
            ${y.header}
          </a>
        </h4>
      </div>
    </div>
    </div>
    <div class="row justify-content-md-center">
    <div class="col-md-8">
      <div class="collapse" id="${y.id}">
        <div class="card card-body">
          <div class="row">
            <img src="img/${y.thumb}" alt="" class="col-lg-7" style="border-radius: 20px;">
            <div class="col-lg-5 mt-3">
              <h3>Added</h3>
                <ul class="list-group list-group-flush">
                  ${listhasil}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>`;

  document.querySelector(".data-changelog").innerHTML += s;
});

function findItemData(keys) {
  return itemsData.filter((x) => x.type == keys[0] && x.meta == keys[1])[0];
}

const craftingRecipes = (data, style, bootstrap = "") => {
  return `
    <div class='${bootstrap}' style="width:256px;height:132px;${style}">
      <img alt="Empty-crafting-table.png" src="img/Empty-crafting-table.png" width="256" height="132">
      <div style="position:relative;top:-118px;left:14px">
        ${(function () {
          let hasilCrafting = "";
          data.keys.forEach((firstArray, firstIndex) => {
            for (let i = 0; i < firstArray.length; i++) {
              hasilCrafting += `<div style="top:${firstIndex * 36}px;left:${
                i * 36
              }px;width:32px;height:32px;position:absolute">
              <a title="${findItemData(firstArray[i].split("-")).name}">
                <img
                  src="img/minecraftitems/${firstArray[i]}.png" 
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="${
                    firstArray[i] == "0-0" ? "" : findItemData(firstArray[i].split("-")).name
                  }"
                  class="tt" 
                  width="32" 
                  height="32"
                >
              </a>
            </div>`;
            }
          });

          return hasilCrafting;
        })()}
        <div style="top:36px;left:188px;width:32px;height:32px;position:absolute">
          <a title="${data.itemName}">
            <img 
              alt="${data.itemName}.png" 
              src="img/moditems/${data.result}.png" 
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="${data.itemName}"
              class="tt" 
              width="32" 
              height="32">
          </a>
        </div>
      </div>
    </div>
  `;
};

const furnaceRecipes = (data, style, bootstrap) => {
  return `
    <div class="${bootstrap}" style="position: absolute; width: 188px; height: 132px; top: 0px; left: 0px; position: relative;${style}">
    <img alt="GUI Smoker-Blast Furnace.png" src="img/Empty-furnace.png" width="188" height="132">

      <!-- Body -->
      <div style="top:14px;left:14px;position: absolute;">
      <a>
        <img alt="${findItemData(data.keys.split("-")).name}}" src="img/minecraftitems/${
    data.keys
  }.png" width="32" height="32"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="${findItemData(data.keys.split("-")).name}"
            class="tt" 
  >
        </a>
      </div>
      <div style="top:50px;left:134px;position: absolute;">
        <a>
          <img 
            alt="${data.itemName}" 
            src="img/moditems/${data.result}.png" 
            width="32" 
            height="32"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="${data.itemName}"
            class="tt" 
          >
        </a>
      </div>
      <div style="top:86px;left:14px;position: absolute;">
        <a>
          <img alt="Coal" src="img/minecraftitems/263-0.png" width="32" height="32" data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Coal"
          class="tt" >
        </a>
      </div>
    </div>
  `;
};

const isFurnace = (data, style, bootstrap) => {
  if (data.type == "furnace")
    return furnaceRecipes(data, style, `${bootstrap} crafting-breakpoint`);
  else return craftingRecipes(data, style, `${bootstrap} crafting-breakpoint`);
};

document.querySelector(".cooking-table").innerHTML = craftingRecipes(
  cookingTables,
  "",
  "mx-auto cooking-table-breakpoint"
);

const craftingDisplay = (data) => {
  let hasil = "";
  data.forEach((x) => {
    hasil += `<div class="col-md-6 my-5">
      <h2 class="text-center " style="font-family: 'PT Sans', sans-serif; color: #37474f;">
        ${x.itemName}
      </h2>
      <div class="justify-content-center" style="width: 100%;">
        ${isFurnace(x, "", "mx-auto ")}
      
      </div>
    </div>`;
  });
  return hasil;
};

document.querySelector(".tools-recipes").innerHTML = craftingDisplay(toolsRecipe);

document.querySelector(".ingredients-recipes").innerHTML = craftingDisplay(spicesRecipe);

document.querySelector(".foods-recipes").innerHTML = craftingDisplay(eggFoods);

const tooltips = document.querySelectorAll(".tt");
tooltips.forEach((t) => {
  new bootstrap.Tooltip(t);
});

document.querySelector(".navigasi-bar-brand").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.search = "";
  document.getElementById("home-tab").click();
});
