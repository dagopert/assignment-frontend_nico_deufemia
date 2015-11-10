import $ from 'jquery'
import page from 'page'
import fetch from 'isomorphic-fetch'
import url from 'url'
import tplHome from '../templates/home.hbs'
import tplNotFound from '../templates/not-found.hbs'

const $content = $('#content')
const limit = 30
let globalError

export function home() {
  $content.html(tplHome())
}

export function notFound() {
  console.log('Page not Found')
  $content.html(tplNotFound())
}

