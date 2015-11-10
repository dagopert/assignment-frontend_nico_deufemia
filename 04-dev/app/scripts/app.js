import $ from 'jquery'
import page from 'page'
import * as pages from './pages'

const $nav = $('#nav')

page('*', function(ctx, next) {
  $nav
    .children()
    .removeClass('active')
  $nav
    .find('a[href|="' + ctx.path + '"]')
    .parent()
    .addClass('active')
  next()
})

page('/', '/home')
page('/home', pages.home)

page('*', pages.notFound)

page()
