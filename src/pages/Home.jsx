import Container from "../components/Container"
import PageTransition from "../components/PageTransition"

function Home() {
  return (
    <>
    <PageTransition>
        <Container circleShadow className="relative">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 py-24">
                <div className="max-w-2xl">
                    <p className="mb-4 font-semibold text-rose-500">Belajar React meet - 03</p>
                    <h1 className="mb-8 text-white text-5xl leading-tight">Selamat datang di belajar React Router DOM</h1>
                    <p className="leading-8 text-lg">Untuk menjadi orang baik kita harus selalu membuat kebaikan, dengan adanya kebaikan kita akan selalu mendapat suatu hal yang baik dari kebaikan tersebut, terkadang sering melakukan kebaikan bisa dikatakan tidak baik namun yang baik sudah pasti kebaikan.</p>
                </div>
                <div className="flex justify-center items-center p-14 md:p-0">
                    <div className="w-72 h-72 relative flex justify-center items-center">
                        <div className="animate-box-1 p-16 rounded-lg border border-rose-500 shadow-2xl shadow-rose-500/10 opacity-100"/>
                        <div className="animate-box-2 p-12 -start-14 top-6 absolute rounded-lg border border-rose-500 shadow-2xl shadow-rose-500/10 opacity-75"/>
                        <div className="animate-box-3 p-8 -end-4 top-2 absolute rounded-lg border border-rose-500 shadow-2xl shadow-rose-500/10 opacity-100"/>
                        <div className="animate-box-4 p-6 -end-12 bottom-0 absolute rounded-lg border border-rose-500 shadow-2xl shadow-rose-500/10 opacity-75"/>
                        <div className="animate-box-5 p-6 start-6 bottom-0 absolute rounded-lg border border-rose-500 shadow-2xl shadow-rose-500/10 opacity-75"/>
                        <div className="animate-box-6 p-4 end-6 bottom-24 absolute rounded-lg border border-rose-500 shadow-2xl shadow-rose-500/10 opacity-50"/>
                        <div className="animate-box-7 p-4 end-14 bottom-4 absolute rounded-lg border border-rose-500 shadow-2xl shadow-rose-500/10 opacity-25"/>
                        <div className="animate-box-8 p-8 -end-14 top-24 absolute rounded-lg border border-rose-500 shadow-2xl shadow-rose-500/10 opacity-10"/>
                    </div>
                </div>
            </div>
        </Container>
    </PageTransition>
    </>
  )
}

export default Home