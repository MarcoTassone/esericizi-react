import useSWR from 'swr'

export function useGithubUser(){
    
    const { data, error, mutate } = useSWR(`https://api.github.com/users`)

    function handleRefresh(){
        mutate()
    }

    return { user: data, error, isLoading: !data && !error, onRefresh: handleRefresh }
}