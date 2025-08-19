import discordServerPfp from './assets/other/discordServerPfp.png'

function Footer()
{

    return(
        <>
            <div className="Footer">
                <div className="footer-cards">
                    <div className="footer-card">
                        <a href="https://discord.gg/thegoddess" target="_blank" rel="noopener noreferrer">
                            <img className="footer-card-picture" src={discordServerPfp} alt="Discord Server" />
                        </a>
                        <h2 className="card-discord-title">Join TheGoddess Server</h2>
                        <p className="card-discord-desc">Community for Evil Hunter Tycoon</p>
                        <a 
                            className="card-discord-link" 
                            href="https://discord.gg/thegoddess" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Join Now →
                        </a>
                    </div>

                    <div className="footer-card">
                        <h2 className="card-title">Coming Soon</h2>
                            <h4 className="card-desc">World Boss Weapon</h4>
                            <h4 className="card-desc">Unique Gears</h4>
                    </div>

                    <div className="footer-card">
                        <h2 className="card-title">Coming Soon</h2>
                        <p className="card-desc">Stay tuned for updates!</p>
                    </div>
                </div>
            </div>
        </>
    )

}


export default Footer;