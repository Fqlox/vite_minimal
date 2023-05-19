import './style.css'


const root = document.querySelector("#root");

async function fetchMyData() {
     const res  = await fetch("data.json");
     const data = await res.json();


     data.forEach(element => {
      const {path, distance, vec} = element;
      console.log(element);
        let p  = document.createElement("p");
        p.innerHTML = `${path}<br/>${distance}<br/>${vec[0]},${vec[1]}`;

        root.appendChild(p);

     });
}

fetchMyData();