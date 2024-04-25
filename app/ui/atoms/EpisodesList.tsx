interface IEpisodesList {
    title: string;
    list: string[];
}

export default function EpisodesList({ title, list }: IEpisodesList) {

    return (
        <section className='w-full max-h-[20vh] h-max-content overflow-y-auto custom-scrollbar gap-4 flex flex-col'>
            <h2 className='text-center text-sm'>{title}</h2>
            {
                list?.length ?
                    <ul>
                        {
                        list.map((item, index) => <li className='text-sm' key={index + 1}>{item}</li>)
                        }
                    </ul>
                    : <p className='text-center text-sm' >Characters do not share episodes</p>
            }
        </section>
    )
}