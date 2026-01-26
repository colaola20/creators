import background from "../assets/mark-basarab-unsplash.jpg";
import "./ShowCreators.css";
import {Link} from "react-router-dom"
import {useState} from "react";

export const AddCreator = () => {
    const [formData, setFormData] = useState({
        name: "",
        img_url: "",
        description: "",
        youtube_url: "",
        twitter_url: "",
        insta_url: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

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
                <div className="form-box">
                    <form>
                        <lebal>
                            Name
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </lebal>
                    </form>
                </div>
            </div>
        )
    }