import style from './head.module.scss'

export default function Head() {
  return (
    <div className={style.Head}>
      <div className='kunchi-logo'>
        <img src={require('../../assets/kunchi.png')} alt="logo" />
      </div>
    </div>
  )
}
