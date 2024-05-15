import { PostDetails } from './pages/PostDetails';
import { CreatePost } from './pages/CreatePost';
import { Home } from './pages/Home'
import { Taller } from './pages/Taller';
import { Tecnologia } from './pages/Tecnologia'
import { PracticaSupervisada } from './pages/PracticaSupervisada'

const routes = [
    { path: "/*", element: <Home /> },
    { path: "/add", element: <CreatePost /> },
    { path: "/post/:projectId", element: <PostDetails /> },
    { path: "/tallerProjects", element: <Taller /> },
    { path: "/tecnologiaProjects", element: <Tecnologia /> },
    { path: "/practicaSupervisadaProjects", element: <PracticaSupervisada /> }
];

export default routes;
