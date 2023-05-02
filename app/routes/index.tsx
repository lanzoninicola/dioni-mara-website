import LogoWhite from "~/client/components/logos/logo-white/logo-white";
import { ButtonLink, ButtonLinkSpotted } from "~/client/components/primitives/button-link/button-link";
import deals from "../content/deals.json"
import Container from "~/client/components/layout/container/container";
import Main from "~/client/components/layout/main/main";

export default function Index() {
  return <Main>
    <BackgroundHomeImage />
    <Container>
      <header className="mb-8">
        <LogoWhite />
      </header>
    </Container>
    <Container>
      <div className="flex flex-col gap-4 md:gap-8 mb-16">
        <ButtonLinkSpotted label="Agende um horário" to="#" />
        <ButtonLink label="Massagens" to="/massagens" />
        <ButtonLink label="Terapias Holísticas" to="#" />
        <ButtonLink label="Yoga" to="#" />
        <ButtonLink label="Tour da sala" to="#" />
        <ButtonLink label="Quem é Dioni Mara" to="#" />
      </div>
    </Container>
    <Container>
      <h2 className="font-extrabold text-2xl mb-8">Ofertas do momento</h2>
      <GridDealBoxes />
    </Container>
  </Main>
}

function BackgroundHomeImage() {
  return <div className="absolute top-0 left-0 md:inset-0 bg-cover bg-left-bottom lg:bg-cover lg:bg-right-top bg-no-repeat opacity-80 -z-10" style={{ backgroundImage: "url('https://res.cloudinary.com/cloudnila/image/upload/v1682558715/dioni-mara-website/home-bg.png')" }}></div>
}


// TODO: Deals inside the loader
// TODO: Check the validation of the deals

function GridDealBoxes() {
  return <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
    {deals.map((deal, index) => <DealBox key={index} imageUrl={deal.thumbnailImageURL} title={deal.title} discount={deal.discount} />)}
  </div>
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