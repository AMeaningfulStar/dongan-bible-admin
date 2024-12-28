import { mainAuth, mainFirestore } from '@/libs/firebase/main.firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

type UserType = {
  id: string
  password: string
  name: string
  phone: string
  position: string
  grade: number
  class: number
}

export const createUsers = async (usersDate: UserType[]) => {
  const results: {
    success: { uid: string; email: string }[]
    failed: { email: string; error: string }[]
  } = {
    success: [],
    failed: [],
  }

  if (usersDate.length === 0) return

  for (const user of usersDate) {
    try {
      // Firebase Authentication에 계정 생성
      const email = `${user.id}@dongan.com` // 이메일 형식으로 변환
      const password = user.password

      const userCredential = await createUserWithEmailAndPassword(mainAuth, email, password)

      // UID와 사용자 정보 가져오기
      const { uid } = userCredential.user

      // 사용자 이름 업데이트
      await updateProfile(userCredential.user, {
        displayName: user.name,
      })

      // Firestore에 추가 정보 저장
      const userDocRef = doc(mainFirestore, 'users', uid) // UID를 문서 ID로 사용
      await setDoc(userDocRef, {
        name: user.name,
        phone: user.phone,
        position: user.position,
        grade: user.grade,
        class: user.class,
        createdAt: new Date().toISOString(),
      })

      // 성공적으로 처리된 사용자 저장
      results.success.push({ uid, email })
    } catch (error: any) {
      console.error(`Failed to register user ${user.id}:`, error.message)

      // 실패한 사용자 저장
      results.failed.push({ email: `${user.id}@example.com`, error: error.message })
    }
  }

  return results
}
