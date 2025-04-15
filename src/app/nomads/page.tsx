import { GetNomads } from "@/actions/nomads";

export default async function NomadsPage() {
    const nomads=await GetNomads()

    return (
        <div>

        </div>
    );
}