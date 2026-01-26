import background from "../assets/mark-basarab-unsplash.jpg";
import "./ShowCreators.css";
import {Link, useNavigate} from "react-router-dom"
import {useState} from "react";
import {supabase} from "../client"
import { Youtube, Instagram, Twitter } from 'lucide-react';
import x from "../assets/X_icon_2.svg"

export const AddCreator = () => {
    const navigate = useNavigate()
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {data, error} = await supabase
            .from("creators")
            .insert([
                {
                    name: formData.name,
                    imageURL: formData.img_url,
                    description: formData.description,
                    youtubeURL: formData.youtube_url,
                    twitterURL: formData.twitter_url,
                    instaURL: formData.insta_url
                }
            ])
            .select()
        
        console.log(data)
        console.log(error)

        if (error) {
            console.log(error.message);
            alert("Error saving creator");
            return;
        } else {
            navigate("/")
        }
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
                    <form className="user-form" onSubmit={handleSubmit}>
                        <label>
                            <h4>Name</h4>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label>
                            <h4>Image</h4>
                            <p>Provide a link to an image of your creator. Be sure to include the http://</p>
                            <input 
                                name="img_url"
                                value={formData.img_url}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <h4>Description</h4>
                            <p>Provide a description of the creator. Who are they? What makes them interesting?</p>
                            <textarea 
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </label>
                        <h2>SOCIAL MEDIA LINKS</h2>
                        <p>Provide at least one of the creator's social media links.</p>
                        <label>
                            <div className="icon-box">
                                <Youtube className="icon" color="red"/>
                                <h4>Youtube</h4>
                            </div>
                            <p>The creator's YouTube handle (without the @)</p>
                            <input 
                                name="youtube_url"
                                value={formData.youtube_url}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <div className="icon-box">
                                <img src={x} alt="X icon" className="icon" />
                                <h4>X</h4>
                            </div>
                            <p>The creator's X handle (without the @)</p>
                            <input 
                                name="twitter_url"
                                value={formData.twitter_url}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <div className="icon-box">
                                <Instagram className="icon" color="#FF0069"/>
                                <h4> Instagram</h4>
                            </div>
                            <p>The creator's Instagram handle (without the @)</p>
                            <input 
                                name="insta_url"
                                value={formData.insta_url}
                                onChange={handleChange}
                            />
                        </label>
                        <button className="submit-btn" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }