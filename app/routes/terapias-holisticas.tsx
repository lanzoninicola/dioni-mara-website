import Container from "~/client/components/layout/container/container";
import Main from "~/client/components/layout/main/main";
import therapies from "../content/terapias.json"
import ServiceBox from "~/client/components/service-box/service-box";
import { MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Service, ServiceUI } from "~/types";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Dioni Mara Yoga & Terapias - Terapias Holísticas",
    description: "A terapia holística aborda a pessoa como um todo, considerando não apenas os sintomas físicos, mas também as emoções, a mente e o espírito. Ela busca equilibrar e harmonizar esses aspectos para promover a saúde e o bem-estar de forma integral.",
    viewport: "width=device-width,initial-scale=1",
});

export function loader() {

    const therapiesUI = therapies.map(t => {
        return {
            ...t,
            infoMessage: `Olá, gostaria de saber mais sobre a terapia ${t.name}. <Faça sua pergunta>`,
            bookingMessage: `Olá, gostaria de agendar uma terapia ${t.name}.`
        }
    })

    return json(therapiesUI)
}


// TODO: implement a sort order to spotlight some services
// TODO: add an explanation of preparation and aftercare
export default function ServicosTerapiasHolisticas() {
    const therapies: ServiceUI[] = useLoaderData();

    return <>
        <Container>
            <h1 className="font-bold text-4xl mb-8">Terapias Holísticas</h1>
            <p className="md:text-xl  leading-normal">A terapia holística aborda a pessoa como um todo, considerando não apenas os sintomas físicos, mas também as emoções, a mente e o espírito. Ela busca equilibrar e harmonizar esses aspectos para promover a saúde e o bem-estar de forma integral.</p>
        </Container>
        <Container>
            <div className="flex flex-col gap-4 lg:gap-8 mt-8">
                {therapies.map((therapy) => {
                    return <ServiceBox
                        key={therapy.id}
                        name={therapy.name}
                        imageUrl={therapy.imageUrl}
                        shortDescription={therapy.shortDescription}
                        infoMessage={therapy.infoMessage}
                        bookingMessage={therapy.bookingMessage}
                    />
                })}

            </div>

        </Container>
    </>
}
