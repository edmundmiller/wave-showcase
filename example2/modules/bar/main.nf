process bye {
  debug true
  conda "${moduleDir}/environment.yml"
  """
  cowsay -t 'Bye Summit!'
  """
}

