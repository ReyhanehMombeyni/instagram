import { useEffect, useState } from "react"
import { client } from "../../../lib/axios"
import { Link } from "react-router-dom";

export default function Comment({ articleId }) {
    const [comment, setComment] = useState([])


    useEffect(() => {
        const getComment = async () => {
            try {
                const response = client.get(`/api/comment/${articleId}`)
                setComment(response.data.comments)
            } catch (err) {
                console.log(err);
            }
        }
        getComment()
    }, [articleId])


    return (
        <div className="w-lg bg-white px-12 py-2.5 flex flex-col gap-2.5">
            <h1 className="text-xl text-black">Comment</h1>
            {comment.lenght > 0 ? (
                comment.map((item) => (
                    <div className="bg-white px-3 py-2 border">
                        <span>{item.comment}</span>
                    </div>
                ))
            ) : (
                <h2 className="text-red-500">No comments available.</h2>
            )}
        </div>
    )
}
