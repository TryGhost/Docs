export const CardCenteredContent = ({ href, src, alt, title = "", description = "", hideTitle = false }) => {
    return (
        <a href={ href } className="block not-prose font-normal group relative my-2 ring-2 ring-transparent rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden w-full hover:border-[#15171A] p-4 bg-white">
            <div className="relative h-full flex flex-col justify-center items-center text-center">
                <img src={ src } alt={ alt } className='block h-20 w-auto object-center' noZoom />
                { title && <h2 className={ `mt-4 font-semibold ${hideTitle ? 'sr-only' : ''}` }>{ title }</h2> }
                { description && <p className="mt-0.5 prose text-sm leading-6 text-gray-600 dark:text-gray-400">{ description }</p> }
            </div>
        </a>
    );
};