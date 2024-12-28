'use client'

import { Users } from '@/components/List'
import { UserSearch } from '@/components/Searchbar'

import { getUserList } from '@/libs/swr'

export default function Users_Manage() {
  const { userList, isLoading, isError } = getUserList()

  if (isLoading) {
    return <div>...Loading</div>
  }

  if (isError) {
    return <div>...isError</div>
  }

  return (
    <div className="flex h-full flex-col gap-y-2">
      <UserSearch />
      <Users userList={userList?.data || []} />
    </div>
  )
}
