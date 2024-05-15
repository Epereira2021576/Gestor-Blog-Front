import React from 'react';
import './blogName.css'


export const BlogName = () => {
    return (
        <>
            <div className="blog-section">
                <div className="max-w-container">
                    <h1 className="blog-title">Blog "Vida Diaria de un programador"</h1>
                    <p className="blog-subtitle">Espacio para compartir un poco de mi vida y los proyecto que he hecho</p>

                    <div className="bg">
                        <div className="sss">
                            <h3 className="Contenedor-proyectos">Proyectos</h3>
                            <ul className="lista-proyectos">
                                <li><a href="/tallerProjects" className="taller-link">Taller</a></li>
                                <li><a href="/tecnologiaProjects" className="tecnologia-link">Tecnologia</a></li>
                                <li><a href="/practicaSupervisadaProjects" className="supervisada-link">Practica Supervisada</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};
