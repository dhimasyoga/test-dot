<template>
    <div class="card">
        <form action="#" @submit.prevent="loginProcess()" id="formLogin">
            <div class="input-container">
                <label for="username">Username</label>
                <input type="text" id="username" v-model="username" autofocus autocomplete="off" required>
            </div>

            <div class="input-container">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" autocomplete="off" required>
            </div>

            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'LoginComponent',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        loginProcess() {
            var self = this;
            if(self.username.length == 0) {
                alert('Mohon inputkan username');
                $('#username').focus();

                return false;
            } else if(self.password.length == 0) {
                alert('Mohon inputkan password');
                $('#password').focus();
                
                return false;
            }

            if(self.username == 'user' && self.password == 'user123') {
                var credential = {uname: self.username,pass: self.password};
                localStorage.setItem('auth', JSON.stringify(credential));

                self.$router.go('/find');
            }
        }
    },
    mounted() {
        $('[autofocus]').focus();
    }
}
</script>

<style scoped lang="scss">
    .card {
        border: 1px solid #ddd;
        border-radius: 10px;

        padding: 15px;
        margin: 0 auto;
        width: 30%;

        .input-container {
            margin-bottom: 1.2rem;
            
            label {
                display: block;
                text-align: left;

                margin-bottom: .5rem;
            }

            input {
                border: 2px solid #ddd;
                border-radius: 8px;

                font-size: 1.15rem;
                outline: none;
                padding: 8px;

                transition: all .2s;
                width: 100%;
            }
        }

        button {
            border: 0;
            background-color: #01afff;
            border-radius: 8px;

            color: #fff;
            cursor: pointer;
            display: block;

            padding: 8px;
            font-size: 1.15rem;
            width: 100%;
        }
    }
</style>