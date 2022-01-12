import './App.scss';
import Header from './components/header'
import Navigation from './components/nav'
import Main from './components/main'
import Footer from './components/footer'

const itemsArr = ['Home', 'Products', 'About', 'Jobs', 'Contact']

function App() {
  return (
    <div className="wrapper">
      <Header title="My Dummy App"/>
      <Navigation navItems={itemsArr} />
      <Main pIndex='0' />
      <Main pIndex='1'/>
      <Main pIndex='2'/>
      <Main pIndex='3'/>
      <Main pIndex='4'/>
      <Footer footerItems={itemsArr} />
    </div>
  )
}

export default App;
