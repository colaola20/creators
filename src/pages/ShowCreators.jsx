import background from "../assets/mark-basarab-unsplash.jpg";
import "./ShowCreators.css"
import {Link} from "react-router-dom"

export const ShowCreators = () => {
    return (
        <div className="main-content">
            <div className = "title-box">
                <img src={background} alt="Background"/>
                <div className="title-content">
                    <div className="title">
                        <h1>Creatorverse</h1>
                    </div>
                    <div className="cta">
                        <Link to="/" className="btn">View All Creators</Link>
                        <Link to="/add" className="btn">Add a creator</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}