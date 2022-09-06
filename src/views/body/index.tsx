import Search from './search/search'
import style from './body.module.scss'

export default function Body() {
  return (
    <div className={style.Body}>
      <Search />
    </div>
  )
}
