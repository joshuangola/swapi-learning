const button = document.querySelector("button");
const div = document.querySelector("div")
function handleClick() {
  console.log("button clicked");
  axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then(response => {
      const residents = response.data.results[0].residents
      residents.forEach(link => {
        axios.get(link)
        .then(res => {
          const name = res.data.name
          const h2 = document.createElement('h2');
          h2.textContent = name;
          div.appendChild(h2);
        })
      });
    });
    
}

button.addEventListener("click", handleClick);
console.log('it is me')