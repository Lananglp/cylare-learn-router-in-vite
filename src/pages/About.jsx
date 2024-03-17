import Container from "../components/Container"
import PageTransition from "../components/PageTransition"

function About() {
  return (
    <PageTransition>
        <Container circleShadow>
            <div className="py-24">
                <div className="max-w-2xl">
                    <p className="mb-4 font-semibold text-rose-500">Belajar React meet - 03</p>
                    <h1 className="mb-8 text-white text-5xl leading-tight">P salken gw lanang</h1>
                    <p className="leading-8 text-lg">Untuk menjadi orang baik kita harus selalu membuat kebaikan, dengan adanya kebaikan kita akan selalu mendapat suatu hal yang baik dari kebaikan tersebut, terkadang sering melakukan kebaikan bisa dikatakan tidak baik namun yang baik sudah pasti kebaikan.</p>
                </div>
            </div>
        </Container>
    </PageTransition>
  )
}

export default About