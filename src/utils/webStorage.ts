import { STORAGE_VALUE_PREFIX } from '@/settings/projectSetting'

enum ValueType {
  DATE = 'date',
  EXPR = 'expr',
  NUMB = 'numb',
  BOOL = 'bool',
  STRN = 'strn',
  OBJT = 'objt',
}

function prefixValueType(type: ValueType) {
  return `${STORAGE_VALUE_PREFIX}${type}|`
}

Object.keys(ValueType).forEach((key) => {
  ValueType['P_' + key] = prefixValueType[ValueType[key]]
})

function encode(value: any) {
  if (Object.prototype.toString.call(value) === '[object Date]') {
    return prefixValueType(ValueType.DATE) + value.toISOString()
  }
  if (Object.prototype.toString.call(value) === '[object RegExp]') {
    return prefixValueType(ValueType.EXPR) + value.source
  }
  if (typeof value === 'number') {
    return prefixValueType(ValueType.NUMB) + value
  }
  if (typeof value === 'boolean') {
    return prefixValueType(ValueType.BOOL) + (value ? '1' : '0')
  }
  if (typeof value === 'string') {
    return prefixValueType(ValueType.STRN) + value
  }
  if (typeof value === 'function') {
    return prefixValueType(ValueType.STRN) + value.toString()
  }
  if (value === Object(value)) {
    return prefixValueType(ValueType.OBJT) + JSON.stringify(value)
  }

  return value
}

function decode(value: string) {
  if (!value.startsWith(STORAGE_VALUE_PREFIX)) {
    return value
  }
  const typeLen = STORAGE_VALUE_PREFIX.length + 4
  const type = value.substr(0, typeLen)
  const source = value.substring(typeLen + 1)

  switch (type) {
    case prefixValueType(ValueType.DATE):
      return new Date(source)

    case '__q_expr':
      return new RegExp(source)

    case '__q_numb':
      return Number(source)

    case '__q_bool':
      return Boolean(source === '1')

    case '__q_strn':
      return '' + source

    case '__q_objt':
      return JSON.parse(source)

    default:
      return value
  }
}

type storageType = 'local' | 'session'

export class BaseStorage {
  webStorage: Storage
  prefix: string
  constructor(type: storageType, prefix = '') {
    this.webStorage = window[`${type}Storage`]
    this.prefix = prefix
  }
  get(key: string) {
    const item = this.webStorage.getItem(key)
    return (item && item) || null
  }
}
