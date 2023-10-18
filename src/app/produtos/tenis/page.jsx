import Link from "next/link";
import Image from "next/image";


export default function Tenis(){
    return(
        <div>
            <h1>Camisas</h1>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum corporis mollitia, facilis molestias aliquid similique quae velit explicabo neque quasi quas temporibus eveniet atque a, rerum quidem vel ad adipisci tempora, voluptate ullam labore eos! Necessitatibus, veniam quis officia laboriosam pariatur culpa libero qui nihil soluta exercitationem excepturi distinctio cum.</p>
                <figure>
                <Image
                    src="httpshttps://prints.ultracoloringpages.com/8b24ec3e6fae7775a9f27fd5819e6303.png://prints.ultracoloringpages.com/551ada1f48c923acddbbb135962eebb9.png"
                    width={300}
                    height={300}
                    alt="tenis"
                    />
            </figure>
                <p><Link href="/">Voltar</Link></p>
            </div>
        </div>
    )
}