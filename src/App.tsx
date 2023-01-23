import { useEffect, useState } from 'react'
import './App.css'
import { Tab } from './components/Tab';
import { Search } from './components/Search';
import { useGetFromStorage } from './hooks/useStorage';

function App() {
  // const [search, set_search] = useState('')
  const { data: search } = useGetFromStorage<string>({ key: 'search' })
  const [selectedTab, set_selectedTab] = useState('')

  const handleSelectTab = (id: string) => {
    set_selectedTab(id)
  }

  // useEffect(() => {
  //   if (chrome?.storage) {
  //     chrome.storage.local.set({ testing: 'ALRIGHT THIS IS FROM THE TEST' })
  //   }
  // }, [])

  return (
    <div className="bg-slate-50 dark:bg-black w-full max-w-[500px]">
      {/* Search bar */}
      <div className='border-b border-slate-300 dark:border-slate-600'>
        <Search value={search ?? ''} onChange={() => {}} />
      </div>

      {/* Profiles */}
      <div className='flex flex-row'>
        <div className='flex flex-row flex-grow gap-1 py-2.5 px-4 overflow-scroll'>
          <Tab id="1" onClick={id => handleSelectTab(id)} name="[DEV] Bil" selected={selectedTab === '1'} />
          <Tab id="2" onClick={id => handleSelectTab(id)} name="[DEV] Boende" selected={selectedTab === '2'} />
          <Tab id="3" onClick={id => handleSelectTab(id)} name="[DEV] MBAR" selected={selectedTab === '3'} />
          <Tab id="4" onClick={id => handleSelectTab(id)} name="[STST] Bil" selected={selectedTab === '4'} />
          <Tab id="5" onClick={id => handleSelectTab(id)} name="[STST] Boende" selected={selectedTab === '5'} />
          <Tab id="6" onClick={id => handleSelectTab(id)} name="[STST] MBAR" selected={selectedTab === '6'} />
        </div>

        <button className='py-2 px-3 text-black dark:text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
      </div>

      <div className='h-[100%] min-h-[200px] max-h-[700px] overflow-scroll'>
        This is some cool content: {search}
      </div>
    </div>
  )
}

export default App

const TextIcon = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>
    </svg>
  )
}
