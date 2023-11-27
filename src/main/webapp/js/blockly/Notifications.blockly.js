window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Notifications = window.blockly.js.blockly.Notifications || {};

/**
 * @function Info
 *
 *
 *
 *
 * @author Leandro Leonardo Assarice
 * @since 27/11/2023, 17:07:51
 *
 */
window.blockly.js.blockly.Notifications.InfoArgs = [];
window.blockly.js.blockly.Notifications.Info = async function() {

  //
  this.cronapi.notification.confirmDialogAlert('info', 'Informação', 'Subtítulo', [this.cronapi.notification.buttonConfirmDialogAlert('false', 'Close', async function() {
    }.bind(this)), this.cronapi.notification.buttonConfirmDialogAlert('true', 'Save', async function() {
    }.bind(this))]);
}

/**
 * @function Aviso
 *
 *
 *
 *
 * @author Leandro Leonardo Assarice
 * @since 27/11/2023, 17:07:51
 *
 */
window.blockly.js.blockly.Notifications.AvisoArgs = [];
window.blockly.js.blockly.Notifications.Aviso = async function() {

  //
  this.cronapi.notification.confirmDialogAlert('warning', 'Aviso', 'Subtítulo', [this.cronapi.notification.buttonConfirmDialogAlert('false', 'Close', async function() {
    }.bind(this)), this.cronapi.notification.buttonConfirmDialogAlert('true', 'Save', async function() {
    }.bind(this))]);
}

/**
 * @function Erro
 *
 *
 *
 *
 * @author Leandro Leonardo Assarice
 * @since 27/11/2023, 17:07:51
 *
 */
window.blockly.js.blockly.Notifications.ErroArgs = [];
window.blockly.js.blockly.Notifications.Erro = async function() {

  //
  this.cronapi.notification.confirmDialogAlert('error', 'Erro', 'Subtítulo', [this.cronapi.notification.buttonConfirmDialogAlert('false', 'Close', async function() {
    }.bind(this)), this.cronapi.notification.buttonConfirmDialogAlert('true', 'Save', async function() {
    }.bind(this))]);
}

/**
 * @function Sucesso
 *
 *
 *
 *
 * @author Leandro Leonardo Assarice
 * @since 27/11/2023, 17:07:51
 *
 */
window.blockly.js.blockly.Notifications.SucessoArgs = [];
window.blockly.js.blockly.Notifications.Sucesso = async function() {

  //
  this.cronapi.notification.confirmDialogAlert('success', 'Sucesso', 'Subtítulo', [this.cronapi.notification.buttonConfirmDialogAlert('false', 'Close', async function() {
    }.bind(this)), this.cronapi.notification.buttonConfirmDialogAlert('true', 'Save', async function() {
    }.bind(this))]);
}
