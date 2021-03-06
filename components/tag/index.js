import Tag from './Tag'
import CheckableTag from './CheckableTag'

Tag.CheckableTag = CheckableTag

/* istanbul ignore next */
Tag.install = function (Vue) {
  Vue.component(Tag.name, Tag)
  Vue.component(Tag.CheckableTag.name, Tag.CheckableTag)
}

export default Tag

