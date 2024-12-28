import * as XLSX from 'xlsx'

type ExceldataType = {
  id: string
  password: string
  name: string
  phone: string
  position: string
  grade: number
  class: number
}

export const readExcel = (file: File): Promise<ExceldataType[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = (e) => {
      try {
        if (!e.target?.result) {
          reject(new Error('파일 읽기에 실패했습니다.'))
          return
        }

        const data = new Uint8Array(e.target.result as ArrayBuffer)
        const workbook = XLSX.read(data, { type: 'array' })

        // 첫 번째 워크시트 읽기
        const firstWorksheet = workbook.Sheets[workbook.SheetNames[0]]
        const jsonData = XLSX.utils.sheet_to_json<string[]>(firstWorksheet, { header: 1 })

        const result: ExceldataType[] = []

        // 데이터 변환
        jsonData.forEach((item, index) => {
          // 첫 번째 행(헤더)은 건너뛰기
          if (index === 0) return

          // 데이터 유효성 검사 및 변환
          const user: ExceldataType = {
            id: item[0] || '', // id 필드
            password: item[1] || '', // password 필드
            name: item[2] || '', // name 필드
            phone: item[3] || '', // phone 필드
            position: item[4] || '', // position 필드
            grade: Number(item[5]) || 0, // grade 필드 (숫자로 변환)
            class: Number(item[6]) || 0, // class 필드 (숫자로 변환)
          }

          // 필수 필드 유효성 검사
          if (user.id && user.password && user.name && user.phone) {
            result.push(user)
          }
        })

        resolve(result)
      } catch (error) {
        reject(new Error('엑셀 파일 처리 중 오류가 발생했습니다.'))
      }
    }

    reader.onerror = () => {
      reject(new Error('파일 읽기 도중 에러가 발생했습니다.'))
    }

    reader.readAsArrayBuffer(file)
  })
}
