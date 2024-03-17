import { useParams } from "react-router-dom"
import Container from "../components/Container"
import PageTransition from "../components/PageTransition"

function BlogShow() {

    const {title} = useParams();
    const judul = title.split("-").join(" ");

  return (
    <PageTransition>
        <Container circleShadow>
            <div className="flex justify-center pt-24 pb-64">
                <div className="max-w-2xl">
                    <p className="mb-4 font-semibold text-rose-500">Blog Trending</p>
                    <h1 className="mb-4 text-white text-3xl leading-tight">{judul}</h1>
                    <p className="mb-8 text-sm">by <span className="text-rose-500">Kadek Lanang</span> - Minggu, 17 Maret 2024</p>
                    <p className="mb-4">Untuk menjadi orang baik kita harus selalu membuat kebaikan, dengan adanya kebaikan kita akan selalu mendapat suatu hal yang baik dari kebaikan tersebut, terkadang sering melakukan kebaikan bisa dikatakan tidak baik namun yang baik sudah pasti kebaikan.</p>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam voluptas officia fugiat consectetur in ad beatae atque repellendus? Rerum inventore, aliquam sed explicabo eaque ratione tempora culpa officiis magnam minima deserunt quae! Nam, tenetur! Vero quasi numquam minus sapiente dolore at, iusto recusandae provident voluptatibus voluptas non labore nisi!</p>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eos ratione sapiente nobis exercitationem quam praesentium, obcaecati ipsa eius odit?</p>
                    <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum omnis, laboriosam hic optio est maiores repellendus aliquam enim nobis veniam quibusdam eum sint accusamus esse cum possimus tenetur et ipsam.</p>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus libero alias nesciunt explicabo! Pariatur, voluptatem? Officia deleniti ducimus recusandae quia non maxime, quis provident soluta error dolores sed doloremque velit? Sapiente nam facere dolores ut nobis, enim veniam harum similique corrupti ipsum expedita minus, accusamus fugiat quos quisquam dicta, unde iusto. Quibusdam beatae, provident quas obcaecati, placeat, est vel ea ut eaque cupiditate saepe non. Eligendi saepe voluptate incidunt.</p>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate. Optio voluptatibus dicta magni minus.</p>
                    <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum sunt voluptates ipsam, reiciendis, est fuga et suscipit dolorum molestiae veritatis voluptas deleniti quae eligendi! Dolores ratione dolorum minus nam. Quam.</p>
                </div>
            </div>
        </Container>
    </PageTransition>
  )
}

export default BlogShow