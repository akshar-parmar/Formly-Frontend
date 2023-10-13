
const Sample = ()=>{
    const port = import.meta.env.VITE_APP_PORT;
    // console.log(port);
    return (
        <>
        <h1 className = "bg-red-400">This is Sample Component!</h1>
        <p>{port}</p>
        </>
    )
}
export default Sample;