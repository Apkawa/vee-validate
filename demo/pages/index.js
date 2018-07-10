import path from 'path'

function importAll (r) {
  const modules = {}
  r.keys().forEach(filepath => {
    let filename = path.basename(filepath, '.vue')
    let dirname = path.basename(path.dirname(filepath)).replace(/^\./, '')

    if (
      filepath.replace(/^\./, '') === __filename
    ) {
      // skip self
      return
    }
    if (dirname && path.basename(filename, '.js') !== 'index') {
      return
    }
    const name = dirname || filename
    let module = r(filepath)
    if (module.default) {
      module = module.default
    }
    modules[name] = module
  })
  return modules
}

export default importAll(require.context('.', true, /(\.vue|\.js)$/))
