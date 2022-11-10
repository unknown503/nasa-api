import { Card } from "./Card"

const weatherData = [
    {
        sol: "3635",
        date: "Oct 28",
        high: "12° F",
        low: "-90° F",
    },
    {
        sol: "3636",
        date: "Oct 29",
        high: "19° F",
        low: "-90° F",
    },
    {
        sol: "3637",
        date: "Oct 30",
        high: "19° F",
        low: "-92° F",
    },
]

export const Weather = () => {

    return (
        <div className="bg-green1">
            <div className="flex flex-col justify-center items-center pt-14 pb-4 container mx-auto">
                <h1 className="text-5xl font-medium text-purple pb-8">Mars Weather</h1>
                <div className="flex flex-col md:flex-row">
                    {
                        weatherData.map((data, index) => (
                            <div className="flex flex-col" key={index} >
                                <Card data={data} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
