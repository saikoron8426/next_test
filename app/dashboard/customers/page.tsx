export default async function page(){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (<p>Customers Page</p>);
}