export interface IhandleSetStorage {
  key: string,
  data: Record<string, any> | string
}

export const useSetStorage = () => {
  const handleSetStorage = ({ key, data }: IhandleSetStorage) => {
    if (chrome.storage) {
      chrome.storage.local.set(key)
    }
  }

  return { handleSetStorage }
}