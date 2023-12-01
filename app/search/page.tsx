import SearchInput from "./search";

export async function generateMetadata({ searchParams }) {
    return {
        description: `Search: ${JSON.stringify(searchParams)}`,
      };
}

export default function SearchPage({ searchParams, children}) {
    return(
        <div>
            <div>{JSON.stringify(searchParams)}</div>
            <SearchInput/>
        </div>
    )
}   