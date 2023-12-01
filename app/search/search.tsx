'use client'

import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function SearchInput() {
    const [value, setValue] = useState<string>('')
    const pathname = usePathname()
    const router = useRouter();
    const queryParams = useSearchParams()

    useEffect(() => {
        let url = pathname || '/';
        const urlSearchParams = queryParams ? new URLSearchParams(queryParams) : new URLSearchParams();
        urlSearchParams.set('search', value);
        if (urlSearchParams.size > 0) {
            url += '?' + urlSearchParams.toString();
        }        router.replace(url, { scroll: false });
    }, [value])

    const changeHandler = (event: any) => {
        setValue(event.target.value);
    }

    return(<input onChange={changeHandler} value={value}/>)
}   