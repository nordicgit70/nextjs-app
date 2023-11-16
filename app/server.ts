'use server'
import { headers } from 'next/headers';

export async function getData() {
    const headerList = headers();
    headerList.forEach((value, key) => {
        console.info(key, value);
    });

    return null;
}