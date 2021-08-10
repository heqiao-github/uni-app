import { login , getUserInfo , logout } from '@/api/user'

const state = {
  hasLogin:false,
  nickname: '',
  avatar: '',
  balance:0,
  memberId:'',
  status:{},
  
}

const mutations = {
  SET_HAS_LOGIN:(state,hasLogin) =>{
	state.hasLogin=hasLogin  
  },
  SET_NICKNAME: (state, nickname) => {
    state.nickname = nickname
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_BALANCE: (state, balance) => {
    state.balance = balance
  },
  SET_MEMBERID: (state, memberId) => {
    state.memberId = memberId
  },
  SET_STATUS: (state, status) => {
	  state.status = status;
  }
}

const actions = {
  // login
  login({commit}, data) {

    return new Promise((resolve, reject) => {
		console.log(data,111)
		 //await login({...data})
		
     login({
        ...data
      }).then(response => {
        const {data : {access_token, token_type,status }} = response
		const token = token_type + "_" +access_token
		uni.setStorageSync('token',token)
		commit('SET_HAS_LOGIN', true)
		debugger
		console.log(status,"status")
		commit("SET_STATUS",status)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getUserInfo({commit, state}) {

    return new Promise((resolve, reject) => {
      getUserInfo().then(response => {
        const {data} = response
		commit("SET_NICKNAME",data.name)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({commit, state,}) {
	console.log('logout')
    return new Promise((resolve, reject) => {
      logout().then(() => {
		 uni.removeStorage({
			key: 'userInfo'
		 })
		 uni.removeStorage({
			key: 'token'
		 })
		 commit('SET_HAS_LOGIN', false)
		 commit('SET_NICKNAME', '')
		 commit('SET_AVATAR', '')
		 commit('SET_BALANCE', '')
		 commit('SET_MEMBERID', '')
		resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
