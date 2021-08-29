// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => displayData(json));


// function displayData(data) {
//   const ul = document.getElementById('ul');
//    let count = 1;
//     for(const user of data) {
//       let li = document.createElement('li')
//       li.classList.add('li')
//       li.innerText=count +". "+ user.title;
//       ul.appendChild(li);
//       count++;
//     }
// }




fetch('file.json')
.then(res => res.json())
.then(json => display(json));



function about(name){
  const link = `https://restcountries.eu/rest/v2/name/${name}`
  fetch(link)
.then(res => res.json())
.then(json => console.log(json));
}

function showabout(data){
console.log (data)
}



function display (data) {
const box = document.getElementById('box');

data.forEach(element => {
  const item = document.createElement('div');
  item.classList.add('col-md-3')
  item.innerHTML=`
  <div class="card shadow-lg m-1" >
  <img src="${element.flag}" class=" img-fluid" alt="...">
  <div class="card-body ">
  <div class="d-flex justify-content-between">
    <h6 class="card-text">${element.name}</h6>
    <h6 class="card-text">${element.capital}</h6>
  </div>
  <button class="btn btn-primary" onclick="about('${element.name}')">About...</button>
  </div>
</div>
  `;
   box.append(item);
 });
}

