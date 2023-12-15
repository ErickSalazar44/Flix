
import ShowTrailer from "@/components/media/ShowTrailer";
import Navbar from "@/components/shared/header/Navbar";

export default function LayoutSerieMovie({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <div className="hidden lg:block">
                <Navbar />
            </div>
            {children}
            <ShowTrailer/>
        </main>
    )
}

