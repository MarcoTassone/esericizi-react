import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((response) => response.json())

export function useGithubUser(){
    
    const { data, error, mutate } = useSWR(`https://api.github.com/users`, fetcher)

    function handleRefresh(){
        mutate()
    }

    return { user: data, error, isLoading: !data && !error, onRefresh: handleRefresh }
}