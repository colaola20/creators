import "./Card.css"
import { Pencil, Info } from "lucide-react"
import { Youtube, Instagram, Trash2 } from 'lucide-react';
import x from "../assets/x-social-media-white-icon.png"
import {Link, useNavigate} from "react-router-dom"
import { supabase } from "../client";
import { Confirmation } from "./Confirmation"
import { useState } from "react"

export const Card = ({creator, onDelete}) => {
    const shortDescription = creator.description
        ? creator.description.slice(0, 250) + "..."
        : "";
    const [showConfirmation, setShowConfirmation] = useState(false)
    const navigate = useNavigate()

    const handleDelete = async () => {
        const {error} = await supabase
            .from("creators")
            .delete()
            .eq("id", creator.id)

        if (error) {
            console.log(error)
            alert("Error deleting creator")
        } else {
            onDelete(creator.id); 
            setShowConfirmation(false);
            navigate("/")
        }
    }
    return (
        <div className="card-container">
            <img src={creator.imageURL} alt="Creator's picture"/>
            <div className="creator-info-box">
                <div className="creator-info">
                    <div className="name-box">
                        <h2>{creator.name.toUpperCase()}</h2>
                    </div>
                    <div className="media-icons-box">
                        <a href={creator.youtubeURL}>
                            <Youtube className="icon"/>
                        </a>
                        <a href={creator.twitterURL}>
                            <div className="x-icon">
                            <img src={x} alt="X icon" />
                        </div>
                        </a>
                        <a href={creator.instaURL}>
                            <Instagram className="icon"/>
                        </a>
                        <div className="icons-box">
                            <Info className="info-icon"/>
                            <Link to={`/edit/${creator.id}`}>
                                <Pencil className="edit-icon"/>
                            </Link>
                            <Trash2 className="delete-icon" onClick={() => setShowConfirmation(true)}/>
                        </div>
                    </div>
                    <div className="description">
                        <p>{shortDescription}</p>
                    </div>
                </div>
            </div>
            {showConfirmation && (
                <Confirmation title="⚠️ WAIT!!! ⚠️" message="Are you sure you want to delete this creator?" onConfirm={handleDelete} onCancel={() => setShowConfirmation(false)}/>
            )}
        </div>
    )
}