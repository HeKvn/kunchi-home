import Search from './search/search'
import Navigation from './navigation/navigation'
import style from './body.module.scss'

export default function Body() {
  return (
    <div className={style.Body}>
      <Search />
      <Navigation />
    </div>
  )
}
