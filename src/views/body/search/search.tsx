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

  return (
    <div className={style.Search}>
      <input type="text" value={value} onInput={(e) => getBaiduText(e)} onKeyDown={(e) => enterSearch(e)} />
      { showLi && <ul id='baidu-suggest-ul'></ul> }
    </div>
  )
}
