'use client'

import { ErrorList, LoadingList, Users } from '@/components/List'
import { UserSearch } from '@/components/Searchbar'

import useSearchData from '@/libs/stores/SearchData'
import { getUserList } from '@/libs/swr'
import { useEffect } from 'react'

export default function Users_Manage() {
  const { userList, isLoading, isError } = getUserList()
  const { searchData, initSearchData } = useSearchData()

  useEffect(() => {
    initSearchData()
  }, [])

  const ListView = () => {
    if (isLoading) {
      return <LoadingList />
    }

    if (isError) {
      return <ErrorList />
    }

    return <Users userList={searchData ? searchData : userList?.data || []} />
  }

  return (
    <div className="flex h-full flex-col gap-y-2">
      <UserSearch />
      <ListView />
    </div>
  )
}
