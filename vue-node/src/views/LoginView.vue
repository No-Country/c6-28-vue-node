<template>
    <div >
        <h2 class="titulo">Iniciar secion</h2>
        <div class="row">
            <div class="col-md-12 form-group">
                <input type="text" class="form-control" placeholder="email">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 form-group">
                <input type="password" placeholder="Enter your Password" class="form-control">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 form-group">
                <input type="submit" class="btn btn-block btn-login" placeholder="Enter your Password">
            </div>
        </div>

    </div>
</template>

<script>


export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            contraseña: '',
        }
    },


}





</script>
<style scoped>

</style>