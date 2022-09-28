import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';



i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources:{
        en: {
            translation: {
                "nav-title": "Members Listing",
                "logout": "Logout",
                "list-of-members": "LIST OF MEMBERS",
                "create-new": "New",
                "create-new-member": "CREATE NEW MEMBER",
                "edit-member": "EDIT MEMBER",
                "no-members-available": "No members available",
                "name": "Name",
                "status": "Status",
                "email": "Email",
                "department": "Department",
                "location": "Location",
                "modify": "Modify",
                "back-button": "Back",
                "create-button": "Create",
                "edit-button": "Edit",
                "delete-button": "Delete",
                "cancel-button": "Cancel",
                "proceed-button": "Proceed",
                "required-field": "Required",
                "30-chars": "must not exceed 30 characters",
                "valid-email": "must be a valid email",
                "creating-user": "Creating user",
                "user-created": "User created!",
                "updating-user": "Updating user",
                "user-updated": "User updated!",
                "deleting-user": "Deleting user",
                "user-deleted": "User deleted",
                "error-occured": "An error occured, please try again later",
                "are-you-sure": "Are you sure you want to delete"
            }
        },
        jp: {
            translation: {
                "nav-title": "メンバーリスト",
                "logout":"ログアウト",
                "list-of-members": "メンバー一覧",
                "create-new": "新しく作る",
                "create-new-member": "新しいメンバーを作成",
                "edit-member": "メンバーを編集",
                "no-members-available": "利用可能なメンバーがいません",
                "name": "名前",
                "status": "状態",
                "email": "電子メイル",
                "department": "デパートメント",
                "location": "位置",
                "modify": "変更",
                "back-button": "戻る",
                "create-button": "作成",
                "edit-button": "変更",
                "delete-button": "消去",
                "cancel-button": "キャンセル",
                "proceed-button": "続行",
                "required-field": "必要",
                "30-chars": "三十文字以内",
                "valid-email": "有効な電子メールである必要があります",
                "creating-user": "ユーザーの作成",
                "user-created": "ユーザーが作成しました",
                "updating-user": "ユーザーの更新",
                "user-updated": "ユーザーが更新されました",
                "deleting-user": "ユーザーの削除",
                "user-deleted": "ユーザーが削除されました",
                "error-occured": "エラーが発生しました。しばらくしてからもう一度お試しください",
                "are-you-sure": "消去してもよろしいですか"
            }
        }
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;