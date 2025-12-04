import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header-content">
                <h1 className="header-name">TheGoddess EHT Helper</h1>
                
                <nav className="header-button">
                    <Link to="/builder" className="header-button-nav">Builder</Link>
                    <Link to="/calculator" className="header-button-nav">Calculator</Link>
                    <Link to="/guide" className="header-button-nav">Guide</Link>
                </nav>

            </div>
            <hr></hr>
        </div>
    );
}

export default Header;