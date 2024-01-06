import { Search } from '@/components/icons/Icons'
import { redirect } from 'next/navigation'

interface SearchFormProps {
    defaultValue: string
    type: string
}

const FormSearch: React.FC<SearchFormProps> = ({ defaultValue, type }) => {
    async function searchAction(formData: FormData) {
        'use server'
        redirect(`/search/${type ? type : 'movie'}?q=${formData.get('query')}`)
    }

    return (
        <form className='relative w-full md:w-48 lg:w-72' action={searchAction}>
            <input
                defaultValue={defaultValue}
                name='query'
                type='text'
                className='w-full px-4 py-3 text-xs rounded-lg bg-[#111] text-white text-opacity-80 pl-10 placeholder:text-xs outline-none placeholder:text-[#999] placeholder:tracking-wide focus:bg-[#1B1A20]'
                placeholder={'¿Qué estás buscando?'}
                aria-label='Buscar'
            />
            <button
                type='submit'
                className='absolute top-[50%] transform -translate-y-1/2 left-3'
                aria-label='Enviar búsqueda'
            >
                <Search clasName='w-4 h-4' />
            </button>
        </form>
    )
}

export default FormSearch
