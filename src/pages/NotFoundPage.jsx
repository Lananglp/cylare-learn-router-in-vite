import { useEffect, useState } from "react"
import Container from "../components/Container"
import PageTransition from "../components/PageTransition"
import { useNavigate } from "react-router-dom";

function NotFoundPage() {

    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const decreaseCount = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount > 0) {
                    return prevCount - 1;
                    } else {
                    clearInterval(decreaseCount);
                    return prevCount;
                }
            })
        }, 1000);

        if (count === 0) {
           navigate("/");
        }

        return () => {
            clearInterval(decreaseCount);
        }

    }, [count, navigate]);

  return (
    <PageTransition>
        <Container circleShadow>
            <div className="py-24">
                <div className="max-w-2xl">
                    <p className="mb-4 font-semibold text-rose-500">Belajar React meet - 03</p>
                    <h1 className="mb-8 text-white text-5xl leading-tight">404 Page not found</h1>
                    <p className="leading-8 text-lg">Untuk menjadi orang baik kita harus selalu membuat kebaikan, dengan adanya kebaikan kita akan selalu mendapat suatu hal yang baik dari kebaikan tersebut, terkadang sering melakukan kebaikan bisa dikatakan tidak baik namun yang baik sudah pasti kebaikan.</p>
                    <p className="mt-8 text-red-500 fa-fade"><i className="fa fa-fw fa-triangle-exclamation text-yellow-500"/> Redirect dalam {count} detik</p>
                </div>
            </div>
        </Container>
    </PageTransition>
  )
}

export default NotFoundPage