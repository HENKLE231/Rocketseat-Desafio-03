import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function timeFromDate(date: string) {
    const text = formatDistanceToNow(
        new Date(date), {
            addSuffix: true,
            locale: ptBR,
        }
    )

    return text[0].toUpperCase() + text.slice(1)
}