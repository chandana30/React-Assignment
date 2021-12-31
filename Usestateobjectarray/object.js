function App(){
    const[movie,setmovie]=React.useState({
        firstMovie:"Bell",
        secondMovie:"Bottom"
    })
    let updateFirstMovie=()=>{
       
        setmovie({
            ...movie,
             firstMovie:"Dell",
        })
    }
    return <div>
        <h2>First Movie:{movie.firstMovie}</h2>
        <h2>Second Name:{movie.secondMovie}</h2>
        <button onClick={updateFirstMovie}>Update First Movie</button>
    </div>

}
ReactDOM.render(<App/>,document.getElementById('container'))