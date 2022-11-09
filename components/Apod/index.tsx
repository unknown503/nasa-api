import { useEffect, useState } from "react"
import { IApodState } from "../../types/states"
import { Spinner } from "../Spinner"
import { DateTime } from "luxon"

export const Apod = () => {
    const [ApodData, setApodData] = useState<IApodState | null>(null)
    const [Loading, setLoading] = useState<boolean>(true)

    const FetchData = async () => {
        const endpoint = "https://api.nasa.gov/planetary/apod"
        const key = process.env.NEXT_PUBLIC_API_KEY

        const res = await fetch(`${endpoint}?api_key=${key}`)
        const data = await res.json()

        const apodRes = {
            date: data.date,
            title: data.title,
            image: data.url,
        }
        setApodData(apodRes)
    }
    console.log()

    useEffect(() => {
        FetchData().then(() => setLoading(false)).catch(console.error)
    }, [])


    return (
        <>
            {
                Loading ?
                    <div className="flex flex-row min-h-[50vh] justify-center items-center">
                        <Spinner />
                    </div>
                    :
                    <div className="flex flex-col justify-center items-center pt-8 pb-8 bg-[#F4F4F4]">
                        <h1 className="text-4xl font-semibold text-center text-purple pb-6">{ApodData?.title}</h1>
                        <div className="flex flex-col">
                            <img src={ApodData?.image} alt={ApodData?.title} className="max-w-sm rounded-lg shadow-2xl" />
                            <span className="text-right pt-2 text-purple font-semibold">{DateTime.fromISO(ApodData?.date || "").toLocaleString(DateTime.DATE_FULL)}</span>
                        </div>
                    </div>

            }
        </>
    )
}