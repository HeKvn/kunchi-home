import React, { useCallback, useState } from 'react'
import style from './search.module.scss'

export default function Search() {
  const [value, setValue] = useState<string>('')
  const [showLi, setShowLi] = useState<boolean>(false)

  const getBaiduText = useCallback(
    (evt: React.FormEvent<HTMLInputElement>) => {
      const inputValue = evt.currentTarget.value
      setValue(inputValue)
      setShowLi(!!inputValue)
      if (!inputValue) return
      let script = document.createElement('script')
      script.src = `https://suggestion.baidu.com/su?wd=${inputValue}&cb=show`
      document.body.appendChild(script)
      document.body.removeChild(script)
    }, []
  )

  const enterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== 'Enter') return
    window.open(`https://www.baidu.com/s?wd=${value}`)
  }

  const clickSearch = () => {
    if (!value) return
    window.open(`https://www.baidu.com/s?wd=${value}`)
  }

  return (
    <div className={style.Search}>
      <div className='input-box'>
        <input type="text" value={value} onInput={(e) => getBaiduText(e)} onKeyUp={(e) => enterSearch(e)} />
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1684" width="36" height="36" onClick={() => clickSearch()}>
          <path d="M469.333333 768c-166.4 0-298.666667-132.266667-298.666666-298.666667s132.266667-298.666667 298.666666-298.666666 298.666667 132.266667 298.666667 298.666666-132.266667 298.666667-298.666667 298.666667z m0-85.333333c119.466667 0 213.333333-93.866667 213.333334-213.333334s-93.866667-213.333333-213.333334-213.333333-213.333333 93.866667-213.333333 213.333333 93.866667 213.333333 213.333333 213.333334z m251.733334 0l119.466666 119.466666-59.733333 59.733334-119.466667-119.466667 59.733334-59.733333z" fill="#666666" p-id="1685"></path>
        </svg>
      </div>
      { showLi && <ul id='baidu-suggest-ul'></ul> }
    </div>
  )
}
