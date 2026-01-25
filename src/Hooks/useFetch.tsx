import { useState, useEffect } from "react";

interface UseFetchProps {
    url: string;
}

function useFetch(props: UseFetchProps) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData(controller: AbortController) {
        setLoading(true)

        try {
            const response = await fetch(props.url, { signal: controller.signal })

            if (!response.ok) {
                throw new Error("Network response was not ok")
            }

            const data = await response.json()

            setData(data)
        } catch (error: unknown | any) {
            setError(error?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const abortController = new AbortController()
        fetchData(abortController)

        return () => {
            abortController.abort()
        }
    }, [props.url])

    return {
        data,
        isLoading: loading,
        error
    }
}

export default useFetch
