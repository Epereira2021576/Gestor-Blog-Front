import { useState } from "react";
import toast from "react-hot-toast";
import { getPosts, deletePosts, postPost, searchPost } from "../services/api";
import { useNavigate } from "react-router-dom";

export const usePosts = () => {
    const [posts, setPosts] = useState( [] );
    const navigate = useNavigate()


    const createPost = async ( data ) => {
        console.log( data )
        const response = await postPost( data );
        if ( response.error ) {
            return toast.error( response.e?.response?.data || 'Error al crear un post' )
        }
        navigate( '/' )

    };

    const getPostsData = async () => {

        const response = await getPosts();
        if ( response.error ) {
            return toast.error(
                response.e?.response?.data || 'Error'
            )
        }
        setPosts( response.data );
    };

    const deletePost = async ( id ) => {
        const response = await deletePosts( id );
        if ( response.error ) {
            return toast.error( response.e?.response?.data || 'Error' )
        }

        navigate( '/' )
    }

    const findByIdPost = async ( id ) => {

        const response = await searchPost( id );
        if ( response.error ) {
            return toast.error(
                response.e?.response?.data || 'Error'
            )
        }
        setPosts( response.data );
    };



    return {
        findByIdPost,
        getPosts: getPostsData,
        isFetching: posts.length === 0,
        posts: posts,
        createPost,
        deletePost
    };
};
