import { useNavigate } from "react-router-dom";

export function LandingPage() {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/About');
    };


    return (
        <>
            <div>
                <h1 className="text-white  text-3xl p-4">Eirik</h1>

                <p className="text-2xl text-white">
                    This is a work in progress and will be continuously developed
                </p>
            </div>


            <button type="button"
                    onClick={handleNavigation}
                    className="text-white bg-linear-to-r
                    from-blue-500 via-blue-600 rounded-2xl
                    to-blue-700 hover:bg-linear-to-br
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 font-medium rounded-base
                    text-sm px-4 py-2.5 text-center leading-5">About me
            </button>
        </>
    )
}