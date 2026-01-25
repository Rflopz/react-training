import { useState, useEffect } from "react";

interface UseFetchProps {
    url: string;
}

const globalCache = new Map();

function useFetch(props: UseFetchProps) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function resetState() {
        setData(null)
        setLoading(true)
        setError(null)
    }

    function handleData(data: any) {
        resetState()
        setData(data)
        globalCache.set(props.url, data)
    }

    async function fetchData(controller: AbortController, isCurrent: () => boolean) {
        setLoading(true)

        try {
            const response = await fetch(props.url, { signal: controller.signal })

            if (!response.ok) {
                throw new Error(`${response.status} - ${response.statusText} there was an error fetching the data`)
            }

            const data = await response.json()

            if (isCurrent()) {
                handleData(data)
            }
        } catch (error: unknown | any) {
            if (isCurrent()) {
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
            handleData(globalCache.get(props.url))
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
