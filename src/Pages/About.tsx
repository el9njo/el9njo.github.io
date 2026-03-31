import {GitHubCalendar} from "react-github-calendar";

export function About() {
    return (
        <>
            <div>
                <h1 className="text-teal-600 text-3xl p-4">About me</h1>

                <div className="p-4 text-white bg-gray-900 rounded-xl">
                    <GitHubCalendar
                        username="el9njo"
                        theme={{
                            dark: ["#3d3d3d", "#134e4a", "#0d9488", "#14b8a6", "#5eead4"]
                        }}
                    />
                </div>

            </div>
        </>
    )
}

