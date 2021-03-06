export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await this.$axios.$get('/api/v1/users/login/jwt');
    const data = JSON.parse(res);
    if(!data.result) {
      return;
    };
    commit('users/login', data.userData, {root: true});
  }
};
