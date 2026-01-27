import "./ShowCreators.css";
import {Link} from "react-router-dom"
import {useState, useEffect} from "react";
import {Hero} from "../components/Hero"
import {useParams} from "react-router-dom"
import {Form} from "../components/Form"
import {supabase} from "../client"

export const EditCreator = () => {
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
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
            const {data, error} = await supabase
            .from("creators")
            .select("*")
            .eq("id", id)
            .single()
            if (error) {
                console.log('Error fetching creators:', error)
                alert('Error fetching creators:', error)
            } else {
                console.log(data)
                setFormData(data)
            }
            setLoading(false)
        }
        fetchCreator()
    }, [id])

    return (
            <div className="main-content">
                <Hero/>
                <Form formData={formData} setFormData={setFormData} id={id}/>
            </div>
        )
    }