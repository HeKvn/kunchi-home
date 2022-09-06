import style from './foot.module.scss'

export default function Foot() {
  return (
    <div className={style.Foot}>
      <div className='description'>
        <span>此池应有天下鱼，此池可钓万条鲤</span>
      </div>
      <div className='copyright'>
        <span>© 2020-2022 hekvn.top </span>
      </div>
      <div className='beian'>
        <a href="https://beian.miit.gov.cn/">粤ICP备 2022049783</a>
      </div>
    </div>
  )
}
