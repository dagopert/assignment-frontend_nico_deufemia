import $ from 'jquery'
import page from 'page'
import Handlebars from 'hbsfy/runtime'
import * as pages from './pages'
import dateFormat from './helpers/date-format'
import times from 'handlebars-helper-repeat'
import eq from './helpers/eq'

const $nav = $('#nav')

Handlebars.registerHelper('dateFormat', dateFormat)
Handlebars.registerHelper('times', times)
Handlebars.registerHelper('eq', eq)

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
page('/contact', pages.contact)
page('/drivers', pages.drivers)
page('/drivers/:driver', pages.driver)

page('/error', pages.internalError)
page('*', pages.notFound)

page()
