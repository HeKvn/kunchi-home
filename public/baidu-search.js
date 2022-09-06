function show (json) {
  let ul = document.querySelector('#baidu-suggest-ul')
  if (!ul) return
  ul.innerHTML = ''
  const length = json.s.length

  for(var i=0; i<length; i++){
    let li = document.createElement('li')
    li.innerHTML = json.s[i]
    li.onclick = () => {
      window.open(`https://www.baidu.com/s?wd=${li.innerHTML}`)
    }
    ul.appendChild(li)
  }
}