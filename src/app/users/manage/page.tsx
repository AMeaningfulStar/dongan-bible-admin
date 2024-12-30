'use client'

import { ErrorList, Users } from '@/components/List'
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

  if (isLoading) {
    return <div>...Loading</div>
  }

  if (isError) {
    return <ErrorList />
  }

  return (
    <div className="flex h-full flex-col gap-y-2">
      <UserSearch />
      <Users userList={searchData ? searchData : userList?.data || []} />
    </div>
  )
}
