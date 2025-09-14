import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header-content">
                <h1 className="header-name">EHT helper</h1>
                
                <nav className="header-button">
                    <Link to="/builder" className="header-button-nav">Builder</Link>
                    <Link to="/atkspd" className="header-button-nav">ATK SPD</Link>
                    <Link to="/guide" className="header-button-nav">Guide</Link>
                </nav>

            </div>
            <hr></hr>
        </div>
    );
}

export default Header;