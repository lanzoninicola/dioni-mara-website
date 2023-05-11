import Container from "~/client/components/layout/container/container";
import Main from "~/client/components/layout/main/main";
import yoga from "../content/yoga.json"
import ServiceBox from "~/client/components/service-box/service-box";
import { MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ServiceUI } from "~/types";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Dioni Mara Yoga & Terapias - Terapias Holísticas",
    description: "A terapia holística aborda a pessoa como um todo, considerando não apenas os sintomas físicos, mas também as emoções, a mente e o espírito. Ela busca equilibrar e harmonizar esses aspectos para promover a saúde e o bem-estar de forma integral.",
    viewport: "width=device-width,initial-scale=1",
});

export function loader() {

    const yogaUI = yoga.map(t => {
        return {
            ...t,
            infoMessage: `Olá, gostaria de saber mais sobre yoga ${t.name}. <Faça sua pergunta>`,
            bookingMessage: `Olá, gostaria de agendar yoga ${t.name}.`
        }
    })

    return json(yogaUI)
}


// TODO: implement a sort order to spotlight some services
// TODO: add an explanation of preparation and aftercare
export default function ServicosYoga() {
    const yoga: ServiceUI[] = useLoaderData();

    return <>
        <Container>
            <h1 className="font-bold text-4xl mb-8">Yoga</h1>
            <p className="md:text-xl leading-normal">Ofereço a prática de yoga para promover o bem-estar físico e mental, por meio da melhoria da flexibilidade, força, equilíbrio e concentração. Buscamos desenvolver a consciência corporal e emocional, visando uma vida mais saudável e equilibrada.</p>
        </Container>
        <Container>
            <div className="flex flex-col gap-4 lg:gap-8 mt-8">
                {yoga.map((y) => {
                    return <ServiceBox
                        key={y.id}
                        name={y.name}
                        imageUrl={y.imageUrl}
                        shortDescription={y.shortDescription}
                        infoMessage={y.infoMessage}
                        scheduleMessage={y.bookingMessage}
                    />
                })}

            </div>

        </Container>
    </>
}
