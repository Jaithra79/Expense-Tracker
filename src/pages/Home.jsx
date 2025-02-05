export default function Home()
{

    function printSomething()
    {
        console.log("Someone clicked the button")
    }
    return (
        <>
            <div className="home">Home page
            <button onClick={printSomething}>Click</button>
            </div>
           
        </>
    )

}