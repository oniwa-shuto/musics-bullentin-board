<template>
  <div class="container">
    <div class="register">
      <div class="title">
        <h1>新規登録</h1>
      </div>
      <div class="register-input">
        <div class="register-name">
          <label for="">Name</label>
          <input type="text" v-model="name" />
        </div>
        <div class="register-email">
          <label for="">Email</label>
          <input type="email" v-model="email" />
        </div>
        <div class="register-password">
          <label for="">Password</label>
          <input type="password" v-model="password" />
        </div>
        <div class="register-confirmation">
          <label for="">Confirmation Password</label>
          <input type="password" v-model="confirmation" />
        </div>
        <button class="btn" @click="signUp" href="#">登録</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  validate({ store, redirect }) {
    if(store.state.users.userData.isLogin) {
      redirect('/posts');
      return false;
    }
    return true;
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmation: '',
    };
  },
  methods: {
    async signUp() {
      if (this.name === '' || this.email === '' || this.password === '') {
        return;
      } else if (this.password !== this.confirmation) {
        alert('パスワードが一致しません');
        return;
      }
      const data = await this.$store.dispatch('users/signUp', {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmation: this.confirmation
      });
      if(!data.result) {
        return;
      }
      this.name = '';
      this.email = '';
      this.password = '';
      this.confirmation = '';
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}
.register {
  margin: 0 auto;
}
.register-input {
  text-align: right;
  margin: 0 auto;

  margin-right: 30%;
}
.title {
  width: 50%;
  height: 100px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #474747;
}
.register-name {
  margin-right: 70px;
}
.register-email {
  margin-right: 70px;
}
.register-password {
  margin-right: 70px;
}
.register-confirmation {
  margin-right: 70px;
}
.btn {
  display: block;
  height: 50px;
  width: 150px;
  margin: 0 auto;
  line-height: 20px;
  background: #aaefe7;
  color: #474747;
  box-shadow: 0 10px 10px 0 rgb(97, 96, 96);
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  margin-top: 60px;
  margin-right: 20%;
}
input {
  width: 250px;
  height: 40px;
  padding: 5px;
  margin-bottom: 20px;
}
label {
  color: #474747;
  margin-right: 20px;
}
</style>
