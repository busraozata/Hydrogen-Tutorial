import {useLoaderData} from 'react-router';

export const loader = async ({params}) => {
    return {name: params.name}
}

export default function Hello(){
    const loaderData = useLoaderData();
    const name = loaderData.name;
    return (
        <div>
            <h1>Hello , <strong>{name}</strong></h1>
        </div>
    )
}