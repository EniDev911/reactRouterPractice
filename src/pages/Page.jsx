import { loremIpsum } from "lorem-ipsum";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const BuildPage = ({index}) => {
    const {id} = useParams();
    useEffect(()=> {
        console.log(id)
    }, [id])
    
    return (
    <>
    <h2>Página {index}</h2>
    <div>
    {id && <span> - párrafo {id}</span>} <br />
     Contenido de Página {index}: {loremIpsum({count: 5})}
    </div>
    </>)
    ;
}

export const PageOne = () => BuildPage({index:1});
export const PageTwo = () => BuildPage({index:2});

