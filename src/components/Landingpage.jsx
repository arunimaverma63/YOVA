import '../App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Avatar from "./Avatar";
import FeatureCards from "./FeatureCards";

export default function Landingpage() {
    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full">
                    <Hero />
                    <Avatar />
                </div>
                <FeatureCards />
            </div>
        </>
    );
}