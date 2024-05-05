function Header () {
    return (
        <header className="header">
            <img className="header--logo" src={require('../images/header-logo.png')}/>
            <h1 className="header--logo--title">Meme Generator</h1>
            <p className="header--text">React Course - Project 3</p>
        </header>
    )
}

export default Header