import { useState, useEffect } from "react";
import champ from "./champion";

export interface Skin {
    id: number;
    name: string;
    rpPrice: number;
    discountRate: number;
    championId: number;
    championName: string;
}

const useSkins = (): Skin[] => {
    const [skins, setSkins] = useState<Skin[]>([]);
    useEffect(() => {
        const skins = champ
            .filter((champ) => champ.skin && champ.skin.length > 0)
            .flatMap((champ) => champ.skin!.map((skin) => ({ ...skin, championId: champ.id, championName: champ.name })))
            .flat() as Skin[];
        setSkins(skins);
    }, []);
    return skins;
};

export default useSkins;
