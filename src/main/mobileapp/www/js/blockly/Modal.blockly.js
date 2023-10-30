window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Modal = window.blockly.js.blockly.Modal || {};

/**
 * @function openSucessModal
 *
 *
 *
 *
 * @author Leandro Leonardo Assarice
 * @since 30/10/2023, 15:15:14
 *
 */
window.blockly.js.blockly.Modal.openSucessModalArgs = [];
window.blockly.js.blockly.Modal.openSucessModal = async function() {

  //
  this.cronapi.notification.confirmDialogAlert('success', 'Título', 'Subtítulo', [this.cronapi.notification.buttonConfirmDialogAlert('true', 'Sim', async function() {
    }.bind(this)), this.cronapi.notification.buttonConfirmDialogAlert('false', 'Não', async function() {
    }.bind(this))]);
}

/**
 * @function openErrorModal
 *
 *
 *
 *
 * @author Leandro Leonardo Assarice
 * @since 30/10/2023, 15:15:14
 *
 */
window.blockly.js.blockly.Modal.openErrorModalArgs = [];
window.blockly.js.blockly.Modal.openErrorModal = async function() {

  //
  this.cronapi.notification.confirmDialogAlert('error', 'Título', 'Subtítulo', [this.cronapi.notification.buttonConfirmDialogAlert('true', 'Sim', async function() {
    }.bind(this)), this.cronapi.notification.buttonConfirmDialogAlert('false', 'Não', async function() {
    }.bind(this))]);
}

/**
 * @function openInfoModal
 *
 *
 *
 *
 * @author Leandro Leonardo Assarice
 * @since 30/10/2023, 15:15:14
 *
 */
window.blockly.js.blockly.Modal.openInfoModalArgs = [];
window.blockly.js.blockly.Modal.openInfoModal = async function() {

  //
  this.cronapi.notification.confirmDialogAlert('info', 'Título', 'Subtítulo', [this.cronapi.notification.buttonConfirmDialogAlert('true', 'Sim', async function() {
    }.bind(this)), this.cronapi.notification.buttonConfirmDialogAlert('false', 'Não', async function() {
    }.bind(this))]);
}

/**
 * @function openWarningModal
 *
 *
 *
 *
 * @author Leandro Leonardo Assarice
 * @since 30/10/2023, 15:15:14
 *
 */
window.blockly.js.blockly.Modal.openWarningModalArgs = [];
window.blockly.js.blockly.Modal.openWarningModal = async function() {

  //
  this.cronapi.notification.confirmDialogAlert('warning', 'Título', 'Subtítulo', [this.cronapi.notification.buttonConfirmDialogAlert('true', 'Sim', async function() {
    }.bind(this)), this.cronapi.notification.buttonConfirmDialogAlert('false', 'Não', async function() {
    }.bind(this))]);
}
