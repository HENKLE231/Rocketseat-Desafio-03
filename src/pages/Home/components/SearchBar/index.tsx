import * as z from 'zod'
import { GitHubContext } from '../../../../contexts/GitHubContext'
import { useContextSelector } from 'use-context-selector'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchFormContainer } from './styles'

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchBar() {
    const fetchPosts = useContextSelector(GitHubContext, (context) => {
        return context.fetchPosts
    })

    const {
        register,
        handleSubmit
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    function handleSeachTransactions(data: SearchFormInputs) {
        fetchPosts(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSeachTransactions)}>
            <input 
                type='text'
                placeholder='Buscar conteúdo'
                {...register('query')}
            />
            <button type='submit'></button>
        </SearchFormContainer>
    )
}