/*
 * @Date         : 2019-06-19 22:45:42
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-02-11 11:00:25
 * @FilePath     : /src/common/js/dom.js
 */
export function hasClass(el, className) {
  // Element.classList 是一个只读属性，返回一个元素的类属性的实时 DOMTokenList 集合。
  return el.classList.contains(className)
}

export function addClass (el, className) {
  el.classList.add(className)
}

// export function getData (el, name, val) {
//   const prefix = 'data-'
//   if (val) {
//     return el.setAttribute(prefix + name, val)
//   }
//   return el.getAttribute(prefix + name)
// }

// let elementStyle = document.createElement('div').style

// let vendor = (() => {
//   let transformNames = {
//     webkit: 'webkitTransform',
//     Moz: 'MozTransform',
//     O: 'OTransform',
//     ms: 'msTransform',
//     standard: 'transform'
//   }

//   for (let key in transformNames) {
//     if (elementStyle[transformNames[key]] !== undefined) {
//       return key
//     }
//   }

//   return false
// })()

// export function prefixStyle (style) {
//   if (vendor === false) {
//     return false
//   }

//   if (vendor === 'standard') {
//     return style
//   }

//   return vendor + style.charAt(0).toUpperCase() + style.substr(1)
// }
