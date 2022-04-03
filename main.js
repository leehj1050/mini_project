loadItems = () => {
  return fetch("data/data.json")
    .then((res) => res.json())
    .then((json) => json.items);
};

displayItems = (items) => {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => {
    return `<li class="item">
      <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
      <span class="item__description">${item.gender},${item.size}</span>
    </li>`;
  });
};

onButtonClick = (e, items) => {
  const dataset = e.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }

  displayItems(items.filter((item) => item[key] === value));
};

setEventListeners = (items) => {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".btnArea");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (e) => onButtonClick(e, items));
};

//main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
