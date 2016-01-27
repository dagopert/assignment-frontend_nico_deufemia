import page from 'page'
import * as pages from './pages'

var moment = require('moment')
moment().format()

page('/', '/home')
page('/home', pages.home)

page('/error', pages.internalError)
page('*', pages.notFound)

page()
