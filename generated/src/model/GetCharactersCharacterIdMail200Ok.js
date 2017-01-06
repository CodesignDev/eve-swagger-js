/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.3.6.dev9
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CharacterscharacterIdmailRecipients'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CharacterscharacterIdmailRecipients'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdMail200Ok = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.CharacterscharacterIdmailRecipients);
  }
}(this, function(ApiClient, CharacterscharacterIdmailRecipients) {
  'use strict';




  /**
   * The GetCharactersCharacterIdMail200Ok model module.
   * @module model/GetCharactersCharacterIdMail200Ok
   * @version 0.3.6.dev9
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdMail200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdMail200Ok
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>GetCharactersCharacterIdMail200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdMail200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdMail200Ok} The populated <code>GetCharactersCharacterIdMail200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'Integer');
      }
      if (data.hasOwnProperty('is_read')) {
        obj['is_read'] = ApiClient.convertToType(data['is_read'], 'Boolean');
      }
      if (data.hasOwnProperty('labels')) {
        obj['labels'] = ApiClient.convertToType(data['labels'], ['Integer']);
      }
      if (data.hasOwnProperty('mail_id')) {
        obj['mail_id'] = ApiClient.convertToType(data['mail_id'], 'Integer');
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = ApiClient.convertToType(data['recipients'], [CharacterscharacterIdmailRecipients]);
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
      }
    }
    return obj;
  }

  /**
   * From whom the mail was sent
   * @member {Integer} from
   */
  exports.prototype['from'] = undefined;
  /**
   * is_read boolean
   * @member {Boolean} is_read
   */
  exports.prototype['is_read'] = undefined;
  /**
   * labels array
   * @member {Array.<Integer>} labels
   */
  exports.prototype['labels'] = undefined;
  /**
   * mail_id integer
   * @member {Integer} mail_id
   */
  exports.prototype['mail_id'] = undefined;
  /**
   * Recipients of the mail
   * @member {Array.<module:model/CharacterscharacterIdmailRecipients>} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * Mail subject
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * When the mail was sent
   * @member {Date} timestamp
   */
  exports.prototype['timestamp'] = undefined;



  return exports;
}));


