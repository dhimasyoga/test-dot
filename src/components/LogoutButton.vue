<template>
    <button id="btnLogout" @click="logout()" type="button">Logout</button>
</template>

<script>

export default {
    name: 'LogoutButton',
    methods: {
        logout() {
            localStorage.removeItem('auth');
            this.$router.go('/find');
        }
    }
}

</script>

<style scoped lang="scss">
    #btnLogout {
        background-color: #507C64;
        border: none;
        border-radius: 8px;
        color: #fff;
        cursor: pointer;

        padding: 8px 16px;
        position: absolute;
        top: 10px;
        right: 10px;

        transition: all .2s;

        &:hover {
            background-color: #406450;
            transition: all .2s;
        }
    }
</style>