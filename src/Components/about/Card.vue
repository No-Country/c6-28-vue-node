<template>
<div class="card rounded m-2">
  <div class="card-body text-center">
    <div class="mt-3 mb-4">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
        class="rounded-circle img-fluid" style="width: 100px;" />
    </div>
    <h4 class="mb-2">Julie L. Arsenault</h4>
    <p class="text-muted mb-4">
      @Programmer 
      <br>
      FrontEnd Developer
    </p>
    <div class="mb-4 pb-2">
      <button type="button" class="btn">
        <i class="bi bi-linkedin"></i>
      </button>
      <button type="button" class="btn">
        <i class="bi bi-twitter fa-lg"></i>
      </button>
      <button type="button" class="btn">
        <i class="bi bi-github fa-lg"></i>
      </button>
    </div>
    <button type="button" class="btn btn-grey btn-rounded btn-lg">
      Message now
    </button>
  </div>
</div>
</template>

<style scoped>
.btn-grey {
  background-color: #898aa6;
  color: white;
  padding: 5px;
  font-size: 18px;
}

.btn-grey:hover {
  background-color: transparent;
  border: 3px solid #898aa6;
  color: #898aa6;
}
</style>