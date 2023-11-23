import AnuncioSection from "@/components/home/AnuncioSection"
import HomeHeader from "@/components/home/HomeHeader"

const HomePage = () => {

  return (
    <main className="main">
      {/* HOME HEADER  */}

      <HomeHeader />

      {/* ANUNCIO */}
      <AnuncioSection />
    </main>
  )
}

export default HomePage