import React from 'react';
import { useForm } from 'react-hook-form';
import { usePosts } from '../hooks/usePost';
import { Navbar } from '../components/Navbar';
import './createPost.css'

export const CreatePost = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createPost } = usePosts();

    const onSubmit = ( data ) => {
        createPost( data );
    };

    return (
        <>
            <Navbar />
            <div className="form-container">
                <form
                    onSubmit={handleSubmit( onSubmit )}
                    className="form-content"
                    encType="multipart/form-data"
                >
                    <h1 className="form-title">Nuevo Post</h1>
                    <div className="form-item">
                        <label
                            htmlFor="postTitle"
                            className="form-label"
                        >
                            Titulo
                        </label>
                        <input
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            {...register( 'postTitle', { required: true } )}
                            className={`form-input ${errors.title ? 'form-error' : ''}`}
                            placeholder="Titulo"
                        />
                        {errors.title && <span className="form-error">Necesitas un titulo</span>}
                    </div>
                    <div className="form-item">
                        <label
                            htmlFor="postDescription"
                            className="form-label"
                        >
                            Descripcion
                        </label>
                        <textarea
                            id="postDescription"
                            name="postDescription"
                            {...register( 'postDescription', { required: true } )}
                            className={`form-input ${errors.description ? 'form-error' : ''}`}
                            placeholder="Descripción"
                        />
                        {errors.description && <span className="form-error">Es necesaria una descripcion</span>}
                    </div>
                    <div className="form-item">
                        <label
                            htmlFor="code"
                            className="form-label"
                        >
                            URL del contenido
                        </label>
                        <input
                            type="text"
                            id="postCode"
                            name="postCode"
                            {...register( 'postCode', { required: true } )}
                            className={`form-input ${errors.code ? 'form-error' : ''}`}
                            placeholder="www.example.com"
                        />
                        {errors.code && <span className="form-error">Necesitas una URL</span>}
                    </div>
                    <div className="form-item">
                        <label
                            htmlFor="authorName"
                            className="form-label"
                        >
                            Autor del post
                        </label>
                        <input
                            type="text"
                            id="authorName"
                            name="authorName"
                            {...register( 'authorName', { required: true } )}
                            className={`form-input ${errors.authorName ? 'form-error' : ''}`}
                            placeholder="Tu nombre"
                        />
                        {errors.authorName && <span className="form-error">El autor es obligatorio</span>}
                    </div>

                    <button
                        type="submit"
                        className="form-submit"
                    >
                        Crear Post
                    </button>
                </form>
                <div className="form-info">
                    <a
                        href="https://veilmail.io/irish-geoff"
                        className="form-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                    </a>
                </div>
            </div>
        </>
    );
};
