import "./Hero.css"
import background from "../assets/mark-basarab-unsplash.jpg";
import {Link} from "react-router-dom"

export const Hero = () => {
    return (
        <div className = "title-box">
            <img src={background} alt="Background"/>
            <div className="title-content">
                <div className="title">
                    <h1>Creatorverse</h1>
                </div>
                <div className="cta-box">
                    <Link to="/" className="btn">View All Creators</Link>
                    <Link to="/add" className="btn">Add a creator</Link>
                </div>
            </div>
        </div>
    )
}