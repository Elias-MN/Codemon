import Hero from "../components/Hero";
import Info from "../components/Info"; // Quité las llaves porque Info es un export default
import { Stadistics } from "../components/Stadistics";

function HomePage() {
    return (
        <>
            <Hero />
            <Info />
            <Stadistics />
        </>
    );
}

export default HomePage;

