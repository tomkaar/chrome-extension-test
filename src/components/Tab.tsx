export interface IProfile {
  id: string
  name: string
  number?: number
  selected?: boolean
  onClick: (id: string) => void
}

export const Tab = ({ id, name,  number = 0, selected = false, onClick }: IProfile) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`relative p-2 px-2 rounded-lg ${selected ? 'bg-slate-200 dark:bg-slate-700' : ''} flex flex-col justify-center items-center`}
    >
      <span
        className={`
          block
          ${selected ? 'text-black dark:text-slate-200' : 'text-slate-800 dark:text-slate-200'}
          leading-none whitespace-nowrap
        `}
      >
        {name}
      </span>
      {/* <div 
        className={`
          absolute bg-sky-600
          -top-2 -right-3
          rounded-md
          py-0.5 px-1.5
          text-white text-[10px]
        `}
      >
        {number}
      </div> */}
    </button>
  )
}
