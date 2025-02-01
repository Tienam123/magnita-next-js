import MapComponent from "@/src/components/MapComponent";
import Hero from "@/src/components/Main/Hero";
import Criteries from "@/src/components/Main/Criteries";
import Products from "@/src/components/Main/Products";
export default async function Home() {

    return (
        <div>
            <Hero />
            <Criteries />
            <Products />
        <MapComponent />
        </div>
    );
}
