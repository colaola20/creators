import background from "../assets/mark-basarab-unsplash.jpg";
import "./ShowCreators.css"
import {useState} from "react";
import {Link} from "react-router-dom";
import {Card} from "../components/Card"
import {supabase} from "../client"

export const ShowCreators = () => {
    const [cardData, setCardData] = useState([]);


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
            <div>
                <Card />
            </div>
        </div>
    )
}