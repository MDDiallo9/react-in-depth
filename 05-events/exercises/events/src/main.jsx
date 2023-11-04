import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Button from './Button.jsx'
import Input from './Input.jsx'
import Grades from './Grades.jsx'
import ContactForm from './ContactForm.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactForm />
  </React.StrictMode>,
)
