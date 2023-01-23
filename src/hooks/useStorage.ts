import { useEffect, useState } from "react"

export interface IuseStorage<T> {
  key: string
  defaultValue?: T
}

export interface IuseStotrageReturn<T> {
  data?: T
}

/**
 * Subscribe to a storage event and return the storage information when event changes
 * 
 * ```
 * const { data } = useGetFromStorage<string>({ key: 'search', defaultvalue: '' })
 * ```
 */
export function useGetFromStorage<T> ({ key, defaultValue }: IuseStorage<T>): IuseStotrageReturn<T> {
  const [data, set_data] = useState<T | undefined>(defaultValue)

  useEffect(() => {
    if (chrome?.storage) {
      // check if storage contains value when 
      chrome.storage.local.get(key, ({ [key]: value }) => {
        set_data(value)
      })

      chrome.storage.local.onChanged.addListener(({ [key]: value }) => {
        console.log('value is', value)
        set_data(value.newValue ?? value.oldValue)
      })
    }
  }, [key])

  return { data: data }
}
