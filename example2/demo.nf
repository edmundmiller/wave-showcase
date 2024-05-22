include { hello } from './modules/foo'
include { bye } from './modules/bar'

workflow {
  hello()
  bye()
}


