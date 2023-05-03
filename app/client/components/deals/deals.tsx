import { Deal } from "~/types";
import Container from "../layout/container/container";

interface DealsProps {
    deals: Deal[];
}

export default function Deals({ deals }: DealsProps) {
    return <Container>
        <h2 className="font-extrabold text-2xl mb-8">Ofertas do momento</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {deals.map((deal) => <DealBox key={deal.id} imageUrl={deal.thumbnailImageURL} title={deal.title} discount={deal.discount} />)}
        </div>
    </Container>
}


interface DealBoxProps {
    imageUrl?: string;
    title?: string;
    discount?: number;
}

function DealBox({ imageUrl, title, discount }: DealBoxProps) {
    return <a href="#" className="bg-violet-200 rounded-xl py-6 px-4">
        <div>
            <img src={imageUrl} className="mb-4 rounded-md" />
            <div className="font-bold flex flex-col justify-center">
                <h3 className="font-extrabold text-3xl">{discount}%</h3>
                <h3 className="text-xl">desconto</h3>
            </div>
            <h4 className="text-xl">{title}</h4>
        </div>
    </a>
}