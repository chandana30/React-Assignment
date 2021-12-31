class Header extends React.Component{
    render(){
        return <h1>Books List</h1>
    }
}

class Content extends React.Component{
    render(){
        return <h3> {this.props.content} {this.props.name}</h3>
    }
}

class Footer extends React.Component{
    render(){
        return <h1>@copybooks</h1>
    }
}

ReactDOM.render(<div>
    <Header/>
    <Content name="Story books"/>
    <Content content="Activity books" name=" and Jokes books"/>
    <Content  name="Subject books"/>
    <Footer/>
    </div>,document.getElementById('container'))