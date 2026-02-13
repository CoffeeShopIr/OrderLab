import { useParams } from "react-router-dom"

export default function DetailProducts(){
    const {detailId} = useParams()
    return(
        <h1 style={{textAlign:"center"}}>{detailId}</h1>
    )
}