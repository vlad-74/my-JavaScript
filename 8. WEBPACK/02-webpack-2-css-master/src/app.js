import _ from 'lodash'
import css from './css/app.css'

console.log(css)

document.body.innerHTML += `<div class="${css.container}">Test block</div>`
