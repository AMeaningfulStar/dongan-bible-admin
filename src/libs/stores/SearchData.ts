import { create } from 'zustand'

type SearchDataStore = {
  searchData: UserType[] | null
  setSearchData: (newSearchData: UserType[]) => void
  initSearchData: () => void
}

type UserType = {
  uid: string
  name: string
  class: number
  grade: number
  position: string
}

const useSearchData = create<SearchDataStore>((set) => ({
  searchData: null,

  setSearchData: (newSearchData: UserType[]) =>
    set((prev: SearchDataStore) => ({
      ...prev.searchData,
      searchData: newSearchData,
    })),

  initSearchData: () =>
    set((prev: SearchDataStore) => ({
      ...prev.searchData,
      searchData: null,
    })),
}))

export default useSearchData
