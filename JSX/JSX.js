const title = 'List'
const element = <h1 id="color">Movies {title} </h1> 

let movies = ['Kotigobba','Rajakumara','Milana','Yuvarathna']
let moviesList = <ul>
    {
        movies.map((value,index)=>{
           return <li key ={value+index}>{value}</li> 
        })
    }
</ul>

let allItems = React.createElement('div',null,element,moviesList)

ReactDOM.render(allItems, document.getElementById('container'))