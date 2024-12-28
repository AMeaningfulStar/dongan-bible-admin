import { mainFirestore } from '@/libs/firebase/main.firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { NextRequest, NextResponse } from 'next/server'

type User = {
  uid: string
  name: string
  class: number
  grade: number
  position: string
}

export async function GET(req: NextRequest, { params }: { params: { name: string } }) {
  const { name } = params

  try {
    const usersRef = collection(mainFirestore, 'users')
    const userQuery = query(usersRef, where('name', '==', name))
    const userSnapshot = await getDocs(userQuery)

    const users: User[] = userSnapshot.docs.map((doc) => ({
      uid: doc.id,
      name: doc.data().name,
      class: doc.data().class,
      grade: doc.data().grade,
      position: doc.data().position == 'student' ? '학생' : '교사',
    }))

    return NextResponse.json({ status: 200, data: users })
  } catch (error) {
    console.error('Failed to fetch users:', error)
    return NextResponse.json({ status: 500, error: 'Internal Server Error' })
  }
}
