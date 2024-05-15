import './ClassProjects.css'
import { Navbar } from '../components/Navbar'
export const Taller = () => {
    return (
        <>
            <Navbar />
            <div className="containerFirst">
                <div>
                    <h1 className='title-category-class'>Proyectos de Taller</h1>
                </div>
                <div className='container'>
                    <div className='titleProyect'>
                        <p>Laboratorio 1</p>
                    </div>
                    <div className='myName'>
                        <p>Edson Pereira</p>
                    </div>
                    <div className='projectDescription'>
                        <p>Creacion de pagina web con tecnología HTML</p>
                    </div>
                    <a className='projectPreview' href="https://github.com/Epereira2021576/Laboratorio-1-Taller"><button>Project Preview</button></a>
                </div>
                <div className='container'>
                    <div className='titleProyect'>
                        <p>Laboratorio 2</p>
                    </div>
                    <div className='myName'>
                        <p>Edson Pereira</p>
                    </div>
                    <div className='projectDescription'>
                        <p>Servicio de adopción de mascotas utilizando nodeJS, Javascript y mongoDB</p>
                    </div>
                    <a className='projectPreview' href="https://github.com/Epereira2021576/AdopcionDeAnimalesNode"><button>Project Preview</button></a>
                </div>

                <div className='container'>
                    <div className='titleProyect'>
                        <p>Laboratorio 3</p>
                    </div>
                    <div className='myName'>
                        <p>Edson Pereira</p>
                    </div>
                    <div className='projectDescription'>
                        <p>Api desarrollada para gestionar diferentes empresas, con generacion de reportes</p>
                    </div>
                    <a className='projectPreview' href="https://github.com/Epereira2021576/Laboratorio-3-Taller"><button>Project Preview</button></a>
                </div>
                <div className='container'>
                    <div className='titleProyect'>
                        <p>Revisión de avances en proyecto final de bimestre</p>
                    </div>
                    <div className='myName'>
                        <p>Edson Pereira</p>
                    </div>
                    <div className='projectDescription'>
                        <p>Proyecto bimestral de la primera unidad. Api proyectada para un sistema de inventario con control exhaustivo y generacion de facturas y reportes</p>
                    </div>
                    <a className='projectPreview' href="https://github.com/Epereira2021576/Proyecto-Bimestre"><button>Project Preview</button></a>
                </div>

                <div className='container'>
                    <div className='titleProyect'>
                        <p>HackerRank: Ejercicios de entrenamiento</p>
                    </div>
                    <div className='myName'>
                        <p>Edson Pereira</p>
                    </div>
                    <div className='projectDescription'>
                        <p>Ejercicios de resolución de problemas y lógica proporcionados en la plataforma HackerRank, resueltos con Javascript</p>
                    </div>
                    <a className='projectPreview' href="https://www.hackerrank.com/dashboard"><button>Project Preview</button></a>
                </div>
                <div className='container'>
                    <div className='titleProyect'>
                        <p>Revisión preliminar de Proyecto Final</p>
                    </div>
                    <div className='myName'>
                        <p>Edson Pereira</p>
                    </div>
                    <div className='projectDescription'>
                        <p>Entrega de un 30% del desarrollo de un API desarrollada para gestionar hoteles</p>
                    </div>
                    <a className='projectPreview' href="https://github.com/Epereira2021576/Bimestral-Grupo-7"><button>Project Preview</button></a>
                </div>
            </div>
        </>

    )
}

export default Taller
