import useSWR from 'swr'

interface UserListResponseType {
  status: number
  data: User[]
}

interface User {
  uid: string
  name: string
  class: number
  grade: number
  position: string
}

export function getUserList() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())

  const { data, error, isLoading, mutate } = useSWR<UserListResponseType, Error>('/api/users/', fetcher)

  return {
    userList: data,
    isLoading,
    isError: !!error,
    mutate,
  }
}
