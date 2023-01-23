import React, { useEffect } from "react"

export interface ISearch {
  value: string
  onChange: (value: string) => void
}

export const Search = ({ value, onChange }: ISearch) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value
    onChange(search)

    // add serach value to chrome storage to be able to autofill when opening the extension again
    if (chrome?.storage) {
      chrome.storage.local.set({ search })
    }
  }

  return (
    <label id="search">
      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder="Search all headers"
        className={`
          bg-transparent
          text-slate-900 dark:text-slate-100
          text-base
          w-full py-2 px-4
        `}
    />
    </label>
  )
}
