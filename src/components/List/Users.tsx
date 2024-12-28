'use client'

import { useState } from 'react'
import Modal from '../Modal'

interface UsersProps {
  userList: ListItemType[]
}

interface ListItemType {
  uid: string
  name: string
  class: number
  grade: number
  position: string
}

export function Users({ userList }: UsersProps) {
  const [isShow, setIsShow] = useState<boolean>(false)
  return (
    <div className="flex h-1 flex-grow flex-col overflow-y-scroll rounded-lg bg-white p-2">
      <div className="bg-gl-grayscale-200 grid grid-cols-12 rounded px-4 py-3 text-center text-white">
        <div>학년/반</div>
        <div className="col-span-8">이름</div>
        <div className="col-span-2">직책</div>
        <div>수정 및 삭제</div>
      </div>
      {/* list item */}
      <div className="flex flex-col overflow-y-scroll">
        {userList.map((data, idx) => (
          <div key={idx} className="gird grid grid-cols-12 items-center border-b px-4 py-3 text-center">
            <div>
              {data.grade} - {data.class}
            </div>
            <div className="col-span-8">{data.name}</div>
            <div className="col-span-2">{data.position}</div>
            <button
              className="bg-gl-grayscale-200 text-button-18-m hover:bg-gl-grayscale-300 rounded px-4 py-2 text-white"
              onClick={() => setIsShow(true)}
            >
              수정
            </button>
          </div>
        ))}
      </div>
      {isShow && (
        <Modal title="사용자 정보 수정" setIsModalShow={setIsShow}>
          이이이
        </Modal>
      )}
    </div>
  )
}
