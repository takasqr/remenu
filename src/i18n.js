import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const locale = 'en-US' // 'ja-JP' default locale

export default new VueI18n({
  locale,
  messages: {
    'en-US': {
      message: {
        home: 'Home',
        habit: 'Habit',
        setting: 'Setting',
        signup_title: 'Remenu',
        signup_sub: 'New Account',
        signup_button: 'CREATE ACCOUNT',
        signin_title: 'Remenu',
        signin_sub: 'Sign In',
        signin_button: 'Sign In',
        agree: 'By signing up, you agree to the',
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
        input_emailAddress: 'email',
        input_password: 'password',
        input_new_task: 'new task',
        input_new_habit: 'new habit',
        input_error_require: 'This is a required input.',
        input_error_count: 'max count {num}',
        input_error_email_valid: 'E-mail must be valid.',
        button_register: 'OK',
        button_edit: 'Edit',
        button_save: 'Save',
        alert_auth_error: 'Authentication processing failed. Please try again.'
      }
    },
    'ja-JP': {
      message: {
        home: 'ホーム',
        habit: '習慣',
        setting: '設定',
        signup_title: 'Remenu',
        signup_sub: '新規登録',
        signup_button: 'ユーザーを作成する',
        signin_title: 'Remenu',
        signin_sub: 'ログイン',
        signin_button: 'ログイン',
        agree: 'ログインすることで、あなたは以下の内容に同意するものとします。',
        terms: '利用規約',
        privacy: 'プライバシーポリシー',
        input_emailAddress: 'メールアドレス',
        input_password: 'パスワード',
        input_new_task: '新しいタスク',
        input_new_habit: '新しい習慣',
        input_error_require: '必須入力です。',
        input_error_count: '{num}文字以内で入力してください。',
        input_error_email_valid: 'メールアドレスの形式で入力して下さい。',
        button_register: '登録',
        button_edit: '編集',
        button_save: '保存',
        alert_auth_error: '認証処理に失敗しました。もう一度やり直して下さい。'
      }
    }
  }
})

Vue.i18n = VueI18n
