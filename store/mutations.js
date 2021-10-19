import initialState from './state'

export default {
  RESET_STORE: (state) => {
    Object.assign(state, initialState())
  },

  SET_FIRE_USER: (state, fireUser) => {
    const { uid, email, displayName, photoURL } = fireUser
    state.fireUser = { uid, email, displayName, photoURL }
  },

  SET_USER: (state, user) => {
    if (user) {
      const {
        level,
        email,
        displayName,
        photoURL,
        nickName,
        updateNickName,
        sex,
        birth,
        location,
        ntrp,
        applicationList,
        findPeopleList,
        participationList,
        alertApplicationToggle,
        alertParticipationToggle,
        createdAt,
        updatedAt,
      } = user
      state.user = {
        level,
        email,
        displayName,
        photoURL,
        nickName,
        updateNickName,
        sex,
        birth,
        location,
        ntrp,
        applicationList,
        findPeopleList,
        participationList,
        alertApplicationToggle,
        alertParticipationToggle,
        createdAt,
        updatedAt,
      }
    } else {
      state.user = null
    }
  },
}
