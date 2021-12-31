let url='https://jsonplaceholder.typicode.com/posts'
async function fetchUrl(){
    let response=await fetch(url)
    let data=await response.json()
    console.log(data);
    appendData(data)
}
function appendData(data) {
    var mainContainer = document.getElementById("container");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = `Title ${i+1}: ` + data[i].title;
      mainContainer.appendChild(div);
    }
  }
fetchUrl();