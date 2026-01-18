import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import counter from './components/Counter';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <WelcomeMessage />
            <MainContent />
            <UserProfile 
                name="Alice" 
                age="25" 
                bio="Loves hiking and photography" 
            />
            {/* You can add more UserProfile components if needed */}
            <Counter />
            <Footer />
        </div>
    );
}

export default App;