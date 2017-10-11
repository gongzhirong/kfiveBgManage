import fetch from '@/utils/fetch'

// 接口api/queryPicturesLibrary
// 查询图片库表所有图片
// created by gongzhirong
export function queryPicturesLibrary () {
  return fetch({
    url: '/api/queryPicturesLibrary',
    method: 'get'
  })
}
