import { json } from '@remix-run/server-runtime';

export async function loader() {
  return json({ message: 'Hello from Mini-Oxygen!' });
}


export function action({ request}){
    return json({
        method: request.method,
        fetch: request.fetch,
        url: request.url,
        headers: Object.fromEntries(request.headers),
        body: request.body,
    })
}