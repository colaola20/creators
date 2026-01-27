import "./Form.css"
import {useNavigate} from "react-router-dom"
import {supabase} from "../client"
import { Youtube, Instagram } from 'lucide-react';
import x from "../assets/X_icon_2.svg"

export const Form = ({formData, setFormData, id}) => {
    const navigate = useNavigate()

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
            .update(formData)
            .eq("id", id)
        
        console.log(data)

        if (error) {
            console.log(error.message);
            alert("Error saving creator");
            return;
        } else {
            navigate("/")
        }
    }

    return (
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
                                name="imageURL"
                                value={formData.imageURL}
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
                                name="youtubeURL"
                                value={formData.youtubeURL}
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
                                name="twitterURL"
                                value={formData.twitterURL}
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
                                name="instaURL"
                                value={formData.instaURL}
                                onChange={handleChange}
                            />
                        </label>
                        <button className="submit-btn" type="submit">Submit</button>
                    </form>
                </div>
    )
}