import { data } from "autoprefixer";
import axios from "axios";

const apiClient = axios.create( {
    baseURL: 'http://127.0.0.1:8080/BlogApp/v1',
    timeout: 10000
} )



export const getPosts = async () => {
    try {
        return await apiClient.get( '/posts/' )
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
}

export const postPost = async ( data ) => {
    try {
        return await apiClient.post( '/posts/', data )
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
}

export const searchPost = async ( id ) => {
    try {
        return await apiClient.get( `/posts/${id}` )
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
}



export const deletePosts = async ( id ) => {
    try {
        return await apiClient.delete( `/posts/${id}` )
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
}