import background from "../assets/mark-basarab-unsplash.jpg";
import "./ShowCreators.css"
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Card} from "../components/Card"
import {supabase} from "../client"

export const ShowCreators = () => {
    const [creators, setCreators] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (loading) return
        const fetchCreators = async () => {
            setLoading(true)
            const {data, error} = await supabase
                .from("creators")
                .select("*")

            if (error) {
                console.log('Error fetching creators:', error)
                alert('Error fetching creators:', error)
            } else {
                console.log(data)
                setCreators(data)
            }
            setLoading(false)
        }
        fetchCreators()
    }, [])

    return (
        <div className="main-content">
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
            <div className="creators-container">
                {creators && creators.map((creator) => (
                    <Card key={creator.id} creator={creator}/>
                ))}
            </div>
        </div>
    )
}