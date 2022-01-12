function Footer(props) {
    return (
      <footer>
        <ul>
            {props.footerItems.map((items, index) => {
                return <li key={index + 200}><a key={index + 300}>{items}</a></li>
            })}
        </ul>
      </footer>
    )
  }
  
  export default Footer