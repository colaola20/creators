import { useParams, Link, useNavigate } from "react-router-dom"
import {supabase} from "../client"
import { Hero } from "../components/Hero"
import {useState, useEffect} from "react";
import "./ViewCreator.css"
import { Youtube, Instagram } from 'lucide-react';
import x from "../assets/x-social-media-white-icon.png"
import { Confirmation } from "../components/Confirmation"

export const ViewCreator = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const navigate = useNavigate()
    const [creator, setCreator] = useState({
        name: "",
        imageURL: "",
        description: "",
        youtubeURL: "",
        twitterURL: "",
        instaURL: ""
    })

    useEffect(() => {
        const fetchCreator = async () => {
            setLoading(true)
            const { data, error } = await supabase
                .from("creators")
                .select("*")
                .eq("id", id)
                .single()
            if (error) {
                console.log('Error fetching creators:', error)
                alert('Error fetching creators:', error)
            } else {
                setCreator(data)
            }
            setLoading(false)
        }
        fetchCreator()
    }, [id])

    const handleDelete = async () => {
        const {error} = await supabase
            .from("creators")
            .delete()
            .eq("id", creator.id)

        if (error) {
            console.log(error)
            alert("Error deleting creator")
        } else {
            setShowConfirmation(false);
            navigate("/")
        }
    }

    return (
        <div className="main-content">
            <Hero/>
            <div className="creator-container">
                <div className="image">
                    <img src={creator.imageURL} alt="Creator's picture" />
                </div>
                <div className="info-box">
                    <h2>{creator.name.toUpperCase()}</h2>
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
                    </div>
                    <div className="description">
                        <p>{creator.description}</p>
                    </div>
                    <div className="btn-container">
                        <Link to={`/edit/${id}`}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={() => setShowConfirmation(true)}>Delete</button>
                    </div>
                </div>
            </div>
            {showConfirmation && (
                <Confirmation title="⚠️ WAIT!!! ⚠️" message="Are you sure you want to delete this creator?" onConfirm={handleDelete} onCancel={() => setShowConfirmation(false)} />
            )}
        </div>
    )
}