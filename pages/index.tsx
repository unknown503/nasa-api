import { Apod } from "../components/Apod";
import { Weather } from "../components/Weather";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto">
      <Apod />
      <Weather />
    </div>
  )
}
