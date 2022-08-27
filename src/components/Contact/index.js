import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useRef, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        let timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()
        emailjs
        .sendForm(
<<<<<<< HEAD

=======
>>>>>>> 79f1665e98da9650bf408396e49b00b73ea7b668
        )
        .then(
            () => {
                alert('Your message has been sent!')
                window.location.reload(false)
            },
            () => {
                alert('Your message has not been sent! Try again, maybe?')
            }
        )
      }

    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} 
                    idx={15} />
                </h1>
                <p>I'm a full-stack web developer and a musician.</p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name ="name" placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name ="email" placeholder='E-mail' required />
                            </li>
                            <li>
                                <input type='text' name ="subject" placeholder='Subject' required />
                            </li>
                            <li>
                                <textarea name ="message" placeholder='Message' required />
                            </li>
                            <li>
                                <input className='flat-button' type='submit' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Jesse Pence
                <br />
                Vancouver, WA 98665
                <br />
                USA 
                <br />
                <span>jessepence@gmail.com</span>
                <br />
                <span>+1 (502) 416-4155</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[45.6847, -122.6742]} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[45.6847, -122.6742]} >
                        <Popup>Jesse lives here. He will touch you.</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        < Loader type="pacman" />
        </>
    )
}

export default Contact;
