

interface ServiceBoxProps {
    imageUrl: string;
    name: string;
    shortDescription: string;
}

export default function ServiceBox({ imageUrl, name, shortDescription }: ServiceBoxProps) {
    return <div className="bg-violet-200 rounded-xl py-6 px-4">
        <img src={imageUrl} className="mb-4 rounded-md" />
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{shortDescription}</p>
    </div>
}