
import { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleSubmit}
                    required />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleSubmit}
                    required />
            </div>
            <div>
                <label>Message:</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleSubmit}
                    required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
  }