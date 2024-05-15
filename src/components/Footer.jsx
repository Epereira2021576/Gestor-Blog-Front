import React from 'react'
import './footer.css'

export const Footer = () => {

    const githubProfile = () => {
        window.location.href = 'https://github.com/Epereira2021576'
    }
    return (
        <>
            <div className="big-footer">
                <span className='my-5'>epereira-2021576@kinal.edu.gt</span>
                <button className="my-button" onClick={githubProfile}>Visita mi perfil de GitHub</button>
            </div>


        </>

    )
}
