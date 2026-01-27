import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const ScrollToHash = () => {
    const { hash, pathname } = useLocation()
    useEffect(() => {
        if (!hash) return

        requestAnimationFrame(() => {
            const el = document.querySelector(hash)
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        })
    }, [hash, pathname])
    return null;
}