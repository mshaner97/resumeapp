import './App.css'
import ContactForm from './ContactForm';
import Dropdown from "./DropMenu";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
        <div className='projectbuttons'>
        <div className='projectmenu'>
          <Button variant="contained" disableElevation
            sx={{ backgroundColor: 'pink', '&:hover': { backgroundColor: 'hotpink' }, fontSize: '1.5rem', padding: '12px 24px', }}>PROJ. 1</Button>
        </div>
        <div className='projectmenu'>
          <Button variant="contained" disableElevation
            sx={{ backgroundColor: 'pink', '&:hover': { backgroundColor: 'hotpink' }, fontSize: '1.5rem', padding: '12px 24px', }}>PROJ. 2</Button>
        </div>
        <div className='projectmenu'>
          <Button variant="contained" disableElevation
            sx={{ backgroundColor: 'pink', '&:hover': { backgroundColor: 'hotpink' }, fontSize: '1.5rem', padding: '12px 24px', }}>PROJ. 3</Button>
        </div>
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
      </header>
      <div>
        <div className='picturebox'>PICTURE</div>
        <div className='biobox'>
        <h3>blah blah blah blah blah blah ~BIO GOES HERE~ blah blah blah blah blah blah</h3>
        </div>
      </div>
      <div className='linkbox'>
        <div className='link'>
          <Button variant="contained" disableElevation
            sx={{ backgroundColor: 'pink', '&:hover': { backgroundColor: 'hotpink' }, fontSize: '1.5rem', padding: '12px 24px', }}>RESUME</Button>
        </div>
        <div className='link'>
          <Button variant="contained" disableElevation
            sx={{ backgroundColor: 'pink', '&:hover': { backgroundColor: 'hotpink' }, fontSize: '1.5rem', padding: '12px 24px', }}>GITHUB</Button>
        </div>
        <div className='link'>
          <Button variant="contained" disableElevation
            sx={{ backgroundColor: 'pink', '&:hover': { backgroundColor: 'hotpink' }, fontSize: '1.5rem', padding: '12px 24px', }}>LINKEDIN</Button>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </>
  )
}

export default App

