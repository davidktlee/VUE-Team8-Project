import { defineStore } from 'pinia'
import { readAccounts, readAccount, createAccount, deleteAccount } from '~/api'

const AUTH_URL = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup'
const LOGIN_URL = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login'
const headers = {
  'content-type': 'application/json',
  apikey: 'FcKdtJs202204',
  username: 'KDT2TEAM8',
}
export const useAccountStore = defineStore('account', {
  state() {
    return {}
  },
  getters: {},
  actions: {
    async getAccounts() {
      const data = await readAccounts()
      return data
    },
    async getAccount() {
      const data = await readAccount()
      return data
    },
    async setAccount(payload) {
      console.log(payload)
      const newAccount = await createAccount(payload)
      console.log(newAccount)
    },
    async removeAccount(accountId, signature) {
      const isDeleted = await deleteAccount(accountId, signature)
      console.log(isDeleted)
    },
  },
})
