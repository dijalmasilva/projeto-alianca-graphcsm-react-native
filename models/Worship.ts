import LineUp from "./LineUp";
import LineUpWorship from "./LineUpWorship";

type Worship = {
    id: string;
    day: string;
    thumbnail: {
        url: string;
    },
    title: string;
    slug: string;
    pictures?: { url: string }[],
    resume?: string;
    soulsSave?: number;
    tags?: string;
    warnings?: string[];
    lineUpWorship?: LineUpWorship,
    lineUpLevite?: LineUp
    lineUpDeacon?: LineUp
}

export default Worship
