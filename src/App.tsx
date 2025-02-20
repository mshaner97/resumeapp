import './App.css'
import ContactForm from './ContactForm';
import Dropdown from "./DropMenu";

function App() {

  return (
    <>
      <header>
      <div className='projectmenu menu'>
          <Dropdown 
            buttonText="MENU" 
            menuItems={["Option 1", "Option 2", "Option 3"]}
          />
        </div>
        <div className='projectmenu'>PROJ. 1</div>
        <div className='projectmenu'>PROJ. 2</div>
        <div className='projectmenu'>PROJ. 3</div>
        <div className='projectmenu searchbar'>SEARCHBAR</div>
      </header>
      <div>
        <div className='picturebox'>PICTURE</div>
        <div className='biobox'>BIO</div>
      </div>
      <div className='linkbox'>
        <div className='link'>ResumePDF</div>
        <div className='link'>GithubLink</div>
        <div className='link'>LinkdInLink</div>
      </div>
      <div>
        <ContactForm />
      </div>
    </>
  )
}

export default App

