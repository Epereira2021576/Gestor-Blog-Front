import { useState } from 'react'
import { Link } from 'react-router-dom';
import { usePosts } from '../hooks/usePost';
import './Card.css'
import { HiBan } from "react-icons/hi";


export const Card = ( { data, renew } ) => {
    const { _id, postTitle, postDescription, postCode, authorName, dateCreate } = data;
    const { deletePost } = usePosts()
    const formatoFecha = ( dateString ) => {
        const date = new Date( dateString );
        const dateOrder = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString( 'en-US', dateOrder );
    };

    const handleDelete = async () => {
        await deletePost( _id );
        renew();
    }

    return (
        <div className="big-container">
            <div className="timeDisplay">
                <span className="onDate">
                    <span className="ml-2">{formatoFecha( dateCreate )}</span>
                </span>
                <div>
                    <button className="delete-button" onClick={handleDelete}><HiBan /></button>
                </div>
            </div>

            <div className="author-1">
                <p className="author-2">
                    <span className="author-3">
                        {authorName}
                    </span>
                </p>
                <Link to={`/post/${_id}`}
                    className="title-home">{postTitle}</Link>
                <p className="desc">
                    {postDescription}
                </p>
            </div>

        </div>
    )
}
