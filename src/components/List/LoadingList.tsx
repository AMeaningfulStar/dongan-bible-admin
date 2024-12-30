export function LoadingList() {
  return (
    <div className="flex h-1 flex-grow items-center justify-center overflow-y-scroll rounded-lg bg-white p-2">
      <svg fill="none" className="h-6 w-6 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path
          clipRule="evenodd"
          d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>{' '}
      <p className="text-loading-18-l">정보를 불러오는 중...</p>
    </div>
  )
}
