interface ModalProps {
  children: React.ReactNode
  title: string
  setIsModalShow: (isModal: boolean) => void
}

export default function Modal({ children, title, setIsModalShow }: ModalProps) {
  const handleModalClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <div
      className="bg-gl-grayscale-opacity-50 fixed left-0 top-0 flex h-screen w-full items-center justify-center"
      onClick={() => setIsModalShow(false)}
    >
      <div className="flex min-w-96 flex-col rounded-md bg-white" onClick={handleModalClick}>
        {/* title */}
        <div className="flex items-center justify-between p-4">
          <span className="text-modal-18-b">{title}</span>
          <button className="text-button-14-l" onClick={() => setIsModalShow(false)}>
            닫기
          </button>
        </div>
        <div className="bg-gl-grayscale-300 h-px w-full" />
        {/* contents */}
        <div className="py-4">{children}</div>
      </div>
    </div>
  )
}
