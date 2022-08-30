<template>
  <div
    id="ModalTemplate"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="ModalTemplateLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <!-- <h5 id="ModalTemplateLabel" class="modal-title">Modal title</h5> -->
        </div>
        <div class="modal-body d-flex align-items-center gap-2">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <!-- <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button> -->
        </div>
      </div>
    </div>
  </div>
</template>
