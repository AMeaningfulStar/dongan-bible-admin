interface NavigationDataType {
  title: string
  navigation: NavigationType[]
}

interface NavigationType {
  titel: string
  path: string
}

export const navigationData: NavigationDataType[] = [
  {
    title: '사용자 관리',
    navigation: [
      { titel: '사용자 등록/삭제', path: '/users/manage' },
      { titel: '관리자 등록/삭제', path: '/users/admin-manage' },
    ],
  },
]
