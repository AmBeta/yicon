export const iconStatus = {
  DELETE: -1,
  UPLOADED: 0,
  REJECTED: 5,
  PENDING: 10,
  REPLACED: 15,
  RESOLVED: 20,
};

export const logTypes = {
  UPLOAD: '上传了图标 @icon',
  AUDIT_OK: '图标 @icon 通过了审核',
  AUDIT_FAILED: '图标 @icon 未通过审核',
  REPLACE: '图标 @iconFrom 被替换为 @iconTo',
  PROJECT_DEL: '从项目中删除了图标 @icon',
  PROJECT_ADD: '项目新增了图标 @icon',
  PROJECT_MEMBER_ADD: '@user 加入了项目',
  PROJECT_MEMBER_DEL: '@user 被管理员从项目中移除',
  PROJECT_VERSION: '项目版本从 @versionFrom 升级到 @versionTo',
  REPO_ADMIN: '大库管理员从 @userFrom 变更为 @userTo',
  PROJECT_OWNER: '项目负责人从 @userFrom 变更为 @userTo',
};