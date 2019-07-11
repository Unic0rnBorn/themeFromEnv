function isDefined (value) {
  if (value === null) { return false }
  if (value === undefined) { return false }
  return true
}

function withDefault (value, defaultValue) {
  if (isDefined(value)) { return value }
  return defaultValue
}

function fromSystem (systemVariableName) {
  return process.env[systemVariableName]
}


module.exports = {

  withDefault,

  withSystemDefault: (systemVariableName, defaultValue = null) => {
    return withDefault(fromSystem(systemVariableName), defaultValue)
  },

  fromSystem,

  isDefined
}
