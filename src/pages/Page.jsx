import { loremIpsum, LoremIpsum } from "lorem-ipsum";

const getPage = (index) => (
    <>
    <h2>Página {index}</h2>
    <div>
     Contenido de Página {index}: {loremIpsum({count: 5})}
    </div>
    </>
);

export const PageOne = () => getPage(1);
export const PageTwo = () => getPage(2);

