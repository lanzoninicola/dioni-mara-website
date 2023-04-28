import WhatsappExternalLink from "../whatsapp-external-link/whatsapp-external-link";


interface ServiceBoxProps {
    imageUrl: string;
    name: string;
    shortDescription: string;
    infoMessage?: string;
    scheduleMessage?: string;
}

export default function ServiceBox({ imageUrl, name, shortDescription, infoMessage, scheduleMessage }: ServiceBoxProps) {
    return <div className="bg-violet-200 rounded-xl py-6 px-4">
        <div className="flex flex-col md:flex-row md:gap-4">
            <div className="h-52 md:h-64 bg-cover bg-center mb-4 md:w-80 rounded-md" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div>
                <div className="mb-8">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p>{shortDescription}</p>
                </div>
                <div className="flex justify-end items-center">
                    {/* {infoMessage && <WhatsappExternalLink ariaLabel="Saiba mais" message={infoMessage} style="border-4 border-sky-500 rounded-full py-4 px-6 font-bold">Saiba mais</WhatsappExternalLink>} */}
                    {scheduleMessage && <WhatsappExternalLink ariaLabel="Agendar" message={scheduleMessage} style="border-4 border-sky-500 bg-sky-200 rounded-full py-4 px-8 font-bold hover:bg-sky-100">Agendar</WhatsappExternalLink>}
                </div>
            </div>
        </div>

    </div>
}