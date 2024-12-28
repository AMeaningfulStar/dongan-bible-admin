'use client'

import { useRef, useState } from 'react'

import Modal from '@components/Modal'

import useSearchData from '@/libs/stores/SearchData'
import { createUsers, readExcel } from '@/utils'

type CreateUserType = {
  id: string
  password: string
  name: string
  phone: string
  position: string
  grade: number
  class: number
}

export function UserSearch() {
  const [isModalShow, setIsModalShow] = useState<boolean>(false)
  const [userName, setUserName] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)
  const [userData, setUserData] = useState<CreateUserType[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const { setSearchData, initSearchData } = useSearchData()

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const files = event.target.files

      if (files) {
        setFile(files[0])
        const excelData = await readExcel(files[0])

        setUserData(excelData)
      }
    } catch (error) {
      console.error('엑셀 파일 처리 오류:', error)
    }
  }

  const handleSearch = async () => {
    if (!userName) return

    try {
      const response = await fetch(`/api/users/name/${userName}`)
      const userList = await response.json()

      setSearchData(userList.data)
    } catch (error) {
      console.error('검색 중 오류 발생:', error)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const handleInit = () => {
    setUserName('')
    initSearchData()
  }

  return (
    <div className="flex w-full gap-x-4 rounded-lg bg-white p-4">
      <input
        className="flex-grow rounded border border-gl-grayscale-100 py-3 pl-2 outline-none"
        placeholder="'사용자 이름'으로 검색하기"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="bg-gl-grayscale-200 text-button-18-m hover:bg-gl-grayscale-300 rounded px-4 py-2 text-white"
        onClick={handleSearch}
      >
        검색
      </button>
      <button
        className="text-button-18-m rounded bg-gl-green-opacity-50 px-4 py-2 text-white hover:bg-gl-green-base"
        onClick={() => setIsModalShow(true)}
      >
        등록
      </button>
      <button
        className="bg-gl-grayscale-200 text-button-18-m hover:bg-gl-grayscale-300 rounded px-4 py-2 text-white"
        onClick={handleInit}
      >
        새로고침
      </button>
      {isModalShow && (
        <Modal title="사용자 등록" setIsModalShow={setIsModalShow}>
          <div className="flex w-full flex-col gap-y-4">
            {/* 개별등록 */}
            <div></div>
            <div className="h-px w-full bg-gl-grayscale-100" />
            {/* 파일등록 */}
            <div className="flex gap-x-2 px-4">
              <div className="flex-grow rounded-md border border-gl-grayscale-100 p-4">
                {file ? (
                  <span className="">{file.name}</span>
                ) : (
                  <span className="text-gl-grayscale-200">파일을 업로드해주세요</span>
                )}
              </div>
              <button
                className="bg-gl-grayscale-200 text-button-18-m hover:bg-gl-grayscale-300 rounded px-4 py-2 text-white"
                onClick={handleClick}
              >
                파일 선택
              </button>
              <button
                className="text-button-18-m rounded bg-gl-green-opacity-50 px-4 py-2 text-white hover:bg-gl-green-base"
                onClick={async () => await createUsers(userData)}
              >
                등록
              </button>
              <input
                type="file"
                className="hidden"
                ref={inputRef}
                accept=".xlsx, .xls, .csv"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
