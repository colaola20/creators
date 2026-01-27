import "./ShowCreators.css"
import {useState, useEffect} from "react";
import {Card} from "../components/Card"
import {supabase} from "../client"
import {Hero} from "../components/Hero"

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
            <Hero/>
            <div id="creators" className="creators-container">
                {creators && creators.map((creator) => (
                    <Card key={creator.id} creator={creator} onDelete={(id) => setCreators(prev => prev.filter(c => c.id !== id))}/>
                ))}
            </div>
        </div>
    )
}