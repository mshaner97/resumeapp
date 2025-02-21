
import { useContext, useState } from 'react'
import './ContactForm.css';
import { AppStateContext, useAppDispatchContext, useAppStateContext } from './AppContext';

export default function ContactForm() {
    const AppState = useAppStateContext()
    const setState= useAppDispatchContext()
    const secondaryAppState= useContext(AppStateContext)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className='contactForm'>
            <div className="formGroup">
                <label className="formLabel">Name:</label>
                <input className='formInput'
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required />
            </div>
            <div className='formGroup'>
                <label className='formLabel'>Email:</label>
                <input className='formInput'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required />
            </div>
            <div className='formGroup'>
                <label className='formLabel'>Message:</label>
                <textarea className='formTextarea'
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required />
            </div>
            <div className='buttonContainer'>
                <button className="submitButton" type="submit">Submit</button>
            </div>
        </form>
    );
}