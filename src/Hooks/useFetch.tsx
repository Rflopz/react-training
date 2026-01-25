import { useState, useEffect } from "react";

interface UseFetchProps {
    url: string;
}

const globalCache = new Map();

function useFetch(props: UseFetchProps) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData(controller: AbortController, isCurrent: () => boolean) {
        setLoading(true)

        try {
            const response = await fetch(props.url, { signal: controller.signal })

            if (!response.ok) {
                console.log(response)
                throw new Error(`${response.status} - ${response.statusText} there was an error fetching the data`)
            }

            const data = await response.json()

            if (isCurrent()) {
                setData(data)
                globalCache.set(props.url, data)
                setError(null)
            }
        } catch (error: unknown | any) {
            if (isCurrent()) {
                console.log(error)
                setError(error?.message || "Something went wrong")
            }
        } finally {
            if (isCurrent()) {
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        let isCurrent = true;

        if (globalCache.has(props.url)) {
            setData(globalCache.get(props.url))
            setLoading(false)
            setError(null)
            return
        }

        const abortController = new AbortController()
        fetchData(abortController, () => isCurrent)


        return () => {
            isCurrent = false;
            abortController.abort();
        }
    }, [props.url])

    return {
        data,
        isLoading: loading,
        error
    }
}

export default useFetch
