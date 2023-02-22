import { ILocales } from './zh-CN'

/* eslint-disable no-template-curly-in-string */
export const ZH_TW: ILocales = {
  UPLOAD_FAILED: '上傳失敗',
  CHECK_SETTINGS: '請檢查你的設定是否正確',
  CHECK_SETTINGS_AND_NETWORK: '請檢查你的設定及網路',
  UPLOAD_FAILED_REASON: '錯誤碼：${code}，請打開瀏覽器貼上地址查看相關原因',
  SERVER_ERROR: '伺服器出錯，請重試',
  AUTH_FAILED: '認證失敗',

  // smms
  PICBED_SMMS: 'SM.MS',
  PICBED_SMMS_TOKEN: '設定Token',
  PICBED_SMMS_BACKUP_DOMAIN: '備用上傳網址',
  PICBED_SMMS_MESSAGE_BACKUP_DOMAIN: '例如 smms.app',

  // Ali-cloud
  PICBED_ALICLOUD: '阿里云OSS',
  PICBED_ALICLOUD_ACCESSKEYID: '設定KeyId',
  PICBED_ALICLOUD_ACCESSKEYSECRET: '設定KeySecret',
  PICBED_ALICLOUD_BUCKET: '設定Bucket',
  PICBED_ALICLOUD_AREA: '設定儲存區域',
  PICBED_ALICLOUD_PATH: '設定儲存路徑',
  PICBED_ALICLOUD_CUSTOMURL: '設定自訂網址',
  PICBED_ALICLOUD_OPTIONS: '設定網址後綴',
  PICBED_ALICLOUD_MESSAGE_AREA: '例如：oss-cn-beijing',
  PICBED_ALICLOUD_MESSAGE_PATH: '例如：test/',
  PICBED_ALICLOUD_MESSAGE_OPTIONS: '例如：?x-oss-process=xxx',
  PICBED_ALICLOUD_MESSAGE_CUSTOMURL: '例如：https://test.com',

  // Tencent-cloud
  PICBED_TENCENTCLOUD: '騰訊云COS',
  PICBED_TENCENTCLOUD_VERSION: 'COS版本',
  PICBED_TENCENTCLOUD_SECRETID: '設定SecretId',
  PICBED_TENCENTCLOUD_SECRETKEY: '設定SecretKey',
  PICBED_TENCENTCLOUD_APPID: '設定AppId',
  PICBED_TENCENTCLOUD_BUCKET: '設定Bucket',
  PICBED_TENCENTCLOUD_AREA: '設定儲存區域',
  PICBED_TENCENTCLOUD_PATH: '設定儲存路徑',
  PICBED_TENCENTCLOUD_OPTIONS: '設定網址後綴',
  PICBED_TENCENTCLOUD_CUSTOMURL: '設定自訂網址',
  PICBED_TENCENTCLOUD_MESSAGE_APPID: '例如：1234567890',
  PICBED_TENCENTCLOUD_MESSAGE_AREA: '例如：ap-beijing',
  PICBED_TENCENTCLOUD_MESSAGE_PATH: '例如：test/',
  PICBED_TENCENTCLOUD_MESSAGE_CUSTOMURL: '例如：https://test.com',
  PICBED_TENCENTCLOUD_MESSAGE_OPTIONS: '例如：?imageMogr2',

  // GitHub
  PICBED_GITHUB: 'GitHub',
  PICBED_GITHUB_TOKEN: '設定Token',
  PICBED_GITHUB_REPO: '設定倉庫名稱',
  PICBED_GITHUB_PATH: '設定儲存路徑',
  PICBED_GITHUB_BRANCH: '設定分支名稱',
  PICBED_GITHUB_CUSTOMURL: '設定自訂網址',
  PICBED_GITHUB_MESSAGE_REPO: '格式：username/repo',
  PICBED_GITHUB_MESSAGE_BRANCH: '例如：main',
  PICBED_GITHUB_MESSAGE_PATH: '例如：test/',
  PICBED_GITHUB_MESSAGE_CUSTOMURL: '例如：https://test.com',

  // qiniu
  PICBED_QINIU: '七牛云',
  PICBED_QINIU_ACCESSKEY: '設定AccessKey',
  PICBED_QINIU_SECRETKEY: '設定SecretKey',
  PICBED_QINIU_BUCKET: '設定Bucket',
  PICBED_QINIU_PATH: '設定儲存路徑',
  PICBED_QINIU_URL: '設定訪問網址',
  PICBED_QINIU_OPTIONS: '設定網址後綴',
  PICBED_QINIU_AREA: '設定儲存區域',
  PICBED_QINIU_MESSAGE_PATH: '例如：test/',
  PICBED_QINIU_MESSAGE_AREA: '例如：z0',
  PICBED_QINIU_MESSAGE_OPTIONS: '例如：?imageslim',
  PICBED_QINIU_MESSAGE_URL: '例如：https://xxx.yyy.glb.clouddn.com',

  // imgur
  PICBED_IMGUR: 'Imgur',
  PICBED_IMGUR_CLIENTID: '設定ClientId',
  PICBED_IMGUR_PROXY: '設定PROXY',
  PICBED_IMGUR_MESSAGE_PROXY: '例如：http://127.0.0.1:1080',

  // upyun
  PICBED_UPYUN: '又拍云',
  PICBED_UPYUN_BUCKET: '設定Bucket',
  PICBED_UPYUN_OPERATOR: '設定操作員',
  PICBED_UPYUN_PASSWORD: '設定操作員密碼',
  PICBED_UPYUN_PATH: '設定儲存路徑',
  PICBED_UPYUN_URL: '設定加速網址',
  PICBED_UPYUN_OPTIONS: '設定網址後綴',
  PICBED_UPYUN_MESSAGE_OPERATOR: '例如：me',
  PICBED_UPYUN_MESSAGE_PASSWORD: '輸入操作員密碼',
  PICBED_UPYUN_MESSAGE_URL: '例如：http://xxx.test.upcdn.net',
  PICBED_UPYUN_MESSAGE_OPTIONS: '例如：!imgslim',
  PICBED_UPYUN_MESSAGE_PATH: '例如：test/',

  // webdav
  PICBED_WEBDAVPLIST: 'WebDAV',
  PICBED_WEBDAVPLIST_HOST: '設定API主機',
  PICBED_WEBDAVPLIST_SSLENABLED: '需要HTTPS時啟用',
  PICBED_WEBDAVPLIST_USERNAME: '設定用戶名',
  PICBED_WEBDAVPLIST_PASSWORD: '設定密碼',
  PICBED_WEBDAVPLIST_PATH: '設定儲存路徑',
  PICBED_WEBDAVPLIST_CUSTOMURL: '設定自訂網址',
  PICBED_WEBDAVPLIST_MESSAGE_HOST: '例如：https://example.com/webdav',
  PICBED_WEBDAVPLIST_MESSAGE_SSLENABLED: '需要HTTPS時啟用',
  PICBED_WEBDAVPLIST_MESSAGE_USERNAME: '例如：me',
  PICBED_WEBDAVPLIST_MESSAGE_PASSWORD: '輸入用戶密碼',
  PICBED_WEBDAVPLIST_MESSAGE_PATH: '例如：test/',
  PICBED_WEBDAVPLIST_MESSAGE_CUSTOMURL: '例如：https://test.com',

  // Plugin Handler
  PLUGIN_HANDLER_PLUGIN_INSTALL_SUCCESS: '插件安裝成功',
  PLUGIN_HANDLER_PLUGIN_INSTALL_FAILED: '插件安裝失敗',
  PLUGIN_HANDLER_PLUGIN_INSTALL_FAILED_REASON: '插件安裝失敗，失敗碼為${code}，錯誤紀錄為 \n ${data}',
  PLUGIN_HANDLER_PLUGIN_INSTALL_FAILED_PATH: '插件安裝失敗，請輸入正確的插件名稱或正確的安裝路徑',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_SUCCESS: '插件卸載成功',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_FAILED: '插件卸載失敗',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_FAILED_REASON: '插件卸載失敗，失敗碼為${code}，錯誤紀錄為 \n ${data}',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_FAILED_VALID: '插件卸載失敗，請輸入正確的插件名稱',
  PLUGIN_HANDLER_PLUGIN_UPDATE_SUCCESS: '插件更新成功',
  PLUGIN_HANDLER_PLUGIN_UPDATE_FAILED: '插件更新失敗',
  PLUGIN_HANDLER_PLUGIN_UPDATE_FAILED_REASON: '插件更新失敗，失敗碼為${code}，錯誤紀錄為 \n ${data}',
  PLUGIN_HANDLER_PLUGIN_UPDATE_FAILED_VALID: '插件更新失敗，請輸入正確的插件名稱'
}
