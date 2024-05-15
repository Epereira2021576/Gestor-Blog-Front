import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { usePosts } from '../hooks/usePost';
import { useParams } from 'react-router-dom';
import { Footer } from '../components/Footer';
export const PostDetails = () => {
    const { projectId } = useParams();
    const { findByIdProject, isFetching, projects } = useProjects();

    useEffect( () => {
        findByIdProject( projectId );
    }, [projectId] );

    const project = projects.find( proj => proj._id === projectId );

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-8/12 px-4 mb-8 rounded-lg shadow-md overflow-hidden">
                        <img src="https://i.pinimg.com/originals/7a/fb/04/7afb0491c91b2f9e9aac56667c3be677.jpg" className="w-full h-64 object-cover" />
                        {project && (
                            <div className="p-6">
                                <h2 className="text-3xl font-semibold mb-4 text-primary">{project.title}</h2>
                                <p className="text-lg mb-6 text-neutral-800">{project.description}</p>
                                <a href={project.code} className="inline-block py-3 px-6 bg-primary text-blue rounded-full shadow-md hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105">Enlace</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
};
