// I Have centered the h1 tag in middle

function Header(props) {
  return (
    <header style={{ backgroundColor: '', color: '#FFFFFF', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <div className="container">
        <h1 style={{ margin: 0 }}>CODFATHER</h1>
        <h2>{props.title}</h2>
      </div>
    </header>
  )
}

export default Header

