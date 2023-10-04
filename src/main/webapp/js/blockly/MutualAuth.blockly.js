window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.MutualAuth = window.blockly.js.blockly.MutualAuth || {};

/**
 * @function login
 *
 * MutualAuth
 *
 *
 * @author Leandro Leonardo Assarice
 * @since 21/09/2023, 15:18:05
 *
 */
window.blockly.js.blockly.MutualAuth.loginArgs = [];
window.blockly.js.blockly.MutualAuth.login = async function() {
 var aaaaaaaaaaaaaaaaaaaaaaa;
  //
  (await this.cronapi.client('cronapi.authentication.mutualLogin').run());
}

/**
 * @function asda
 *
 * Descreva esta função...
 *
 * @param aaaaaaaaaaaaaaaaaaaaaaa
 *
 * @author Leandro Leonardo Assarice
 * @since 21/09/2023, 15:18:05
 *
 */
window.blockly.js.blockly.MutualAuth.asdaArgs = [{ description: 'aaaaaaaaaaaaaaaaaaaaaaa', id: 'db785e74' }];
window.blockly.js.blockly.MutualAuth.asda = async function(aaaaaaaaaaaaaaaaaaaaaaa) {

  //
  (await this.cronapi.client('cronapi.authentication.mutualSignup').run());
}
