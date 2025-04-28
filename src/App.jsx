import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header.jsx'
import Countdown from './components/Countdown.jsx'
import Invitation from './components/Invitation.jsx'
import Gallery from './components/Gallery.jsx'
import Location from './components/Location.jsx'
import GuestBook from './components/GuestBook.jsx'
import AccountInfo from "./components/AccountInfo.jsx"
import './App.css'

function App() {

  return (
    <div>
        <Header />
        <Countdown />
        <Invitation />
        <Gallery />
        <Location />
        <GuestBook />
        <AccountInfo />
    </div>
  )
}

export default App;
