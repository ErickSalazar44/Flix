import Navbar from "@/components/shared/header/Navbar";

export default function LayoutSerieMovie({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) {
    return (
        <main className="">
            <div className="hidden lg:block">
                <Navbar />
            </div>
            {children}
            {modal}
        </main>
    )
}

