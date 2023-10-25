/**
 * @获取当前用户客户端类型
 * @returns { String }
 */
export function getUserAgentType() {
  let isMobile = isMobileFn();
  let isWx = /micromessenger/i.test(navigator.userAgent); // 是否微信
  let isComWx = /wxwork/i.test(navigator.userAgent); // 是否企业微信

  if (isComWx && isMobile) {
    //手机端企业微信
    return 'com-wx-mobile';
  } else if (isComWx && !isMobile) {
    //PC端企业微信
    return 'com-wx-pc';
  } else if (isWx && isMobile) {
    // 手机端微信
    return 'wx-mobile';
  } else if (isWx && !isMobile) {
    // PC端微信
    return 'wx-pc';
  } else {
    return 'other';
  }
}
/**
 * @判断当前客户端是否是移动端
 * @returns
 */
export function isMobileFn() {
  let isMobile = window.navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
  ); // 是否手机端
  return isMobile;
}
