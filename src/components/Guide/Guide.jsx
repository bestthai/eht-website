import { useState } from "react";
import { Menu, ChevronDown, ChevronRight, Sun, Moon } from "lucide-react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import GuideContent from "./GuideContent";
import './Guide.css';

import EHTLogo from '../../assets/other/Evil Hunter Tycoon Logo.jpg';

function Guide()
{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openSection, setOpenSection] = useState(null);
    const [theme, setTheme] = useState("dark");

    const sections = {
        Information: ["Hunter Rarities", "Hunter Base Stats", "Characteristics"],
        "Early Game": ["Easy → Nightmare", "Nightmare → Torment 3"],
        "Torment Boost": ["Torment Boosted 1-10", "Torment Boosted 11-20", "Torment Boosted 21-30"],
        "Super Boost": ["Do not farm here!"],
        "Chaos Boost": ["Chaos Boosted 1-10", "Chaos Boosted 11-20", "Chaos Boosted 21-30"],
        "Abyss Boost": ["Abyss Boosted 1-10", "Abyss Boosted 11-20", "Abyss Boosted 21-30"],
        Misc: [],
    };

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const location = useLocation();

    return(
        <div className={`guide-layout ${theme}`}>
            {/* Side Bar */}
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <h2 className="sidebar-title">Sidebar Title</h2>
                    <button 
                        className="close-button"
                        onClick={() => setIsSidebarOpen(false)}    
                    >
                        ✕
                    </button>

                    {/* Theme */}
                    <button 
                        className="theme-button theme-button-sidebar"
                        onClick={toggleTheme}
                    >
                        {theme === "dark" ? (<Sun className="icon"/>) : (<Moon className="icon"/>)}
                    </button>
                </div>

                <nav className="sidebar-nav">
                    {Object.entries(sections).map(([key, items]) => (
                        <div key={key} className="sidebar-section">
                            <button 
                                className="section-toggle"
                                onClick={() => setOpenSection(openSection === key ? null : key)}
                            >
                                {openSection === key ? (<ChevronDown className="icon"/>) : (< ChevronRight className="icon"/>)}
                                {key}
                            </button>

                            {openSection === key && (
                                <ul className="section-list"> 
                                    {items.map((item, i) => {
                                        const linkPath = `/guide/${encodeURIComponent(item)}`;
                                        const isActive = location.pathname === linkPath;

                                        return (
                                            <li key={i}>
                                                <Link 
                                                    className={`section-item ${isActive ? "active" : ""}`}
                                                    to={`/guide/${encodeURIComponent(item)}`}
                                                    onClick={() => setIsSidebarOpen(false)}
                                                >
                                                    {item}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Mobile Header */}
                <header className="mobile-header">
                    <button 
                        className="menu-button"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <Menu className="icon"/>
                    </button>
                    <h1 className="mobile-title">Guide Title</h1>

                    {/* Theme */}
                    <button 
                        className="theme-button theme-button-header"
                        onClick={toggleTheme}
                    >
                        {theme === "dark" ? (<Sun className="icon"/>) : (<Moon className="icon"/>)}
                    </button>
                </header>
            

                {/* Guide Content */}
                <main className="guide-content">
                    <Routes>
                        <Route path=":page" element={<GuideContent/>} />

                        <Route path="" element={
                            <section>
                                <h2 className="guide-heading">Evil Hunter Tycoon</h2>

                                <p className="guide-paragraph">
                                Welcome to TheGoddess's Evil Hunter Tycoon Guide! 
                                
                                This guide is designed to help both new and experieced players navigate the game, understand its mechanics, and optimize your gameplay. 
                                </p>

                                <p className="guide-paragraph">
                                If you are starting out, Evil Hunter Tycoon (EHT) is a game where you build and manage a team of hunters to fight against various monsters, bosses, and other players. The game features a variety of hunters, each with unique abilities and stats, as well as challenges to keep things intersting.
                                </p>

                                <p className="guide-paragraph">
                                This guide is a collective effort from <b>Bestthai, Satursan, Xenavier, and many more from TheGoddess Community</b>. If you have any suggestions, corrections, or additional information that you think would be helpful to include in this guide, please feel free to contact me in the discord server, found in the footer of the page.
                                </p>    

                                <p className="guide-paragraph">
                                You can start the guide by selecting a section from the navigation bar on the left (PC) or top (mobile). Each section covers a different aspect of the game, from basic mechanics to advanced strategies.
                                </p>    

                                <img
                                    className="eht-image"
                                    src={EHTLogo}
                                    alt="Evil Hunter Tycoon Game Photo"
                                />
                                
                            </section>
                        } />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default Guide;
