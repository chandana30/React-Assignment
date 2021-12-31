function App(){
    const[fruits,setfruits]=React.useState(['mango','apple','banana','orange','guva'])

    let removeOrange=()=>{
    let indexOfOrange=fruits.indexOf('orange')
    console.log(indexOfOrange);
     if(indexOfOrange>=0)
     {
         fruits.splice(indexOfOrange,1)
         setfruits(
               [...fruits]
         )}
     }

    return <div>
        <h2>Fruits List</h2>
        {
            
            fruits.map((fruit,idx)=>{
                return <p key={idx+fruit}>{fruit}</p>
            })
        }
        
        <button onClick={removeOrange}>Remove Orange</button>
    </div>
}
ReactDOM.render(<App/>,document.getElementById('container'))