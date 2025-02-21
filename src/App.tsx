import './App.css'
import ContactForm from './ContactForm';
import Dropdown from "./DropMenu";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, BrowserRouter } from 'react-router';
import { AppStateContext, AppDispatchContext } from './AppContext';
import { useState } from 'react';

function ButtonLink({ to, children }) {
  return (
    <Link to={to}>
      <Button variant="contained" disableElevation className="custom-button">
        {children}
      </Button>
    </Link>
  );
}

function DownloadButton({ children }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ''; // RESUME PATH GOES HERE
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button variant="contained" disableElevation className="custom-button" onClick={handleDownload}>
      {children}
    </Button>
  );
}

function App() {
  const [state, setState] = useState({})

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={setState}>
        <BrowserRouter>
          <header>
            <div className='projectmenu menu'>
              <Dropdown
                buttonText="MENU"
                menuItems={["Option 1", "Option 2", "Option 3"]}
              />
            </div>
            <div className='projectmenu'>
              <Button variant="contained" disableElevation className="custom-button">PROJ. 1</Button>
            </div>
            <div className='projectmenu'>
              <Button variant="contained" disableElevation className="custom-button">PROJ. 2</Button>
            </div>
            <div className='projectmenu'>
              <Button variant="contained" disableElevation className="custom-button">PROJ. 3</Button>
            </div>
            <div className='projectmenu searchbar'>
              <TextField id="outlined-basic" label="SEARCH" variant="outlined"
                sx={{
                  width: '300px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'pink',
                    },
                    '&:hover fieldset': {
                      borderColor: 'pink',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'hotpink',
                    },
                  },
                  '& .MuiInputLabel-outlined.Mui-focused': {
                    color: 'hotpink',
                  },
                }}
              />
            </div>
          </header >
          <div>
            <div className='picturebox'>PICTURE</div>
            <div className='biobox'>
              <h3>blah blah blah blah blah blah ~BIO GOES HERE~ blah blah blah blah blah blah</h3>
            </div>
          </div>
          <div className='linkbox'>
            <div className='link'>
              <DownloadButton>RESUME</DownloadButton>
            </div>
            <div className='link'>
              <ButtonLink to="https://github.com/mshaner97">GITHUB</ButtonLink>
            </div>
            <div className='link'>
              <ButtonLink to="https://www.linkedin.com/in/maggie-shaner-3aa047349/">LINKEDIN</ButtonLink>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </BrowserRouter>
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export default App

