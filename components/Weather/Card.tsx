import { useState } from "react"
import { Button } from "./Button"

interface IData {
    sol: string,
    date: string,
    high: string,
    low: string,
}

interface ICard {
    data: IData
}

export const Card = ({ data }: ICard) => {
    const [ShowData, setShowData] = useState<boolean>(false)
    const { sol, date, high, low } = data

    return (
        <div className="mr-6 mb-6">
            <div className="bg-green3 py-4 px-8 mb-2 text-white flex flex-col text-center rounded-xl">
                <span className="text-3xl">Sol {ShowData ? sol : "-"}</span>
                <span className="text-1xl">{ShowData ? date : "..."}</span>
                <hr className="my-2" />
                <span className="text-1xl">High: {ShowData ? high : "-"}</span>
                <span className="text-1xl">Low: {ShowData ? low : "-"}</span>
            </div>
            <Button content={`Clima en Marte ${date}`} onClick={() => setShowData(true)} />
        </div>
    )
}
