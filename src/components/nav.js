

function Navigation(props) {
    return (
        <nav>
            <ul>
                {props.navItems.map((items, index) => {
                    return <li key={index + 100}><a key={index}>{items}</a></li>
                })}
            </ul>
        </nav>
    )
  }
  
  export default Navigation
  