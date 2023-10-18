import Link from "next/link";
import Image from "next/image";


export default function Camisa(){
    return(
        <div>
            <h1>Camisas</h1>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum corporis mollitia, facilis molestias aliquid similique quae velit explicabo neque quasi quas temporibus eveniet atque a, rerum quidem vel ad adipisci tempora, voluptate ullam labore eos! Necessitatibus, veniam quis officia laboriosam pariatur culpa libero qui nihil soluta exercitationem excepturi distinctio cum.</p>
                <figure>
                    <Image
                    src=""
                    width={300}
                    height={300}
                    alt="camiseta de emoji"
                    />

                </figure>
                <p><Link href="/">Voltar</Link></p>
            </div>
        </div>
    )
}