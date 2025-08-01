import Link from "next/link";
import {CSSProperties, useMemo,} from "react";
import {Badge} from "@mui/base/Badge";

function useStyling():CSSProperties{
    return useMemo(()=>
        (
            {
                textAlign: "center",
                backgroundColor: "burlywood",
                color: "blue",
                fontSize: "calc(2px + 4vw)",
                padding: "5%",
            }
        ),
        []
    )
}

export default function Header(){
    const memoStyle=useStyling();
    return(
        <header>
            <Badge
                slots={{root:"div"}}
                slotProps={{
                    root:{
                        style:memoStyle,
                    },
                }}
            >
                Next.js Into
            </Badge>
            <nav>
                <ul className={`flex flex-row  justify-evenly p-0 list-none`}>
                    <li className={`border-amber-800`}><Link href={`/`}>Home</Link></li>
                    <li className={`border-amber-800`}><Link href={`/about`}>About</Link></li>
                </ul>
            </nav>
        </header>

    );
}