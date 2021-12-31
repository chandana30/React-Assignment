function Header(props){
    console.log(props)
    return <h1 className="head">List of vegetables {props.value}</h1>
}
function Content({list}){
    return <h3>{list.veg1} {list.veg2} {list.veg3} {list.frt1}  {list.frt2}  {list.frt3}</h3>
}

function Footer({name}){
    return <h1>{name}</h1>
}


ReactDOM.render(<div>
<Header value=" and fruits"/>
<Content list={{veg1:'Beans',veg2:'carrot',veg3:'cucumber',frt1:'orange',frt2:'banana',frt3:'mango'}} />
<Footer name="@vegfrt"/>

</div>,document.getElementById('container'))