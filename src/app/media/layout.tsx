import Navbar from "@/components/shared/header/Navbar";

export default function LayoutSerieMovie({ children }: { children: React.ReactNode }) {
    return (
        <main className="">
            <div className="hidden lg:block">
                <Navbar />
            </div>
            {children}
        </main>
    )
}
