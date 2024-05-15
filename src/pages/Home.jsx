import React from 'react'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import { BlogName } from '../components/BlogName'
import { usePosts } from '../hooks/usePost'
import { useEffect } from 'react';
import { Footer } from '../components/Footer'

export const Home = () => {

    const renew = () => {
        getPosts
    }

    const { getPosts, isFetching, posts } = usePosts();
    useEffect( () => {

        getPosts();
    }, [] );

    return (
        <>
            <Navbar />
            <BlogName />
            <div className='bg-gradient-to-br from-neutral-200 to-neutral-100'>

                <div className="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16">
                    <h1 className='font-bold text-4xl mb-8 text-center text-primary'> Últimos Posts</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6"> {/* Aumenté el espacio entre columnas */}
                        {isFetching ? (
                            <div className="text-center text-lg text-gray-600 mb-12">No hay nada posteado aún</div>
                        ) : (
                            <>
                                {posts.map( post => (
                                    <Card key={post._id} data={post} renew={renew} />
                                ) )}
                            </>
                        )}
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}
