import discordServerPfp from './assets/other/discordServerPfp.png'

function Footer()
{

    return(
        <>
            <div className="Footer">
                <div className="footer-cards">
                    <div className="footer-card">
                        <a href="https://discord.gg/HdsZQ2KcUV" target="_blank" rel="noopener noreferrer">
                            <img className="footer-card-picture" src={discordServerPfp} alt="Discord Server" />
                        </a>
                        <h2 className="card-discord-title">Join TheGoddess Server</h2>
                        <p className="card-discord-desc">Community for Evil Hunter Tycoon</p>
                        <a 
                            className="card-discord-link" 
                            href="https://discord.gg/HdsZQ2KcUV" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Join Now →
                        </a>
                    </div>

                    <div className="footer-card">
                        <h2 className="card-title">Coming Soon</h2>
                        <h2 className="card-desc"></h2>
                    </div>

                    <div className="footer-card">
                        <h2 className="card-title">Credit</h2>
                        <p className="card-desc"><strong>Bestthai</strong> </p>
                        <p className="card-desc"><strong>Roelando</strong> for atkspd equation ❤️</p>
                    </div>
                </div>
            </div>
        </>
    )

}


export default Footer;