import "./Card.css"
import {Pencil, Info} from "lucide-react"
import { Youtube, Instagram } from 'lucide-react';
import x from "../assets/x-social-media-white-icon.png"

export const Card = ({creator}) => {
    const shortDescription = creator.description.slice(0, 250) + ("...");
    return (
        <div className="card-container">
            <img src={creator.imageURL} alt="Creator's picture"/>
            <div className="creator-info-box">
                <div className="creator-info">
                    <div className="name-box">
                        <h2>{creator.name.toUpperCase()}</h2>
                        <div className="icons-box">
                            <Info className="info-icon"/>
                            <Pencil className="edit-icon"/>
                        </div>
                    </div>
                    <div className="media-icons-box">
                        <Youtube className="icon"/>
                        <div className="x-icon">
                            <img src={x} alt="X icon" />
                        </div>
                        <Instagram className="icon"/>
                    </div>
                    <div className="description">
                        <p>{shortDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}