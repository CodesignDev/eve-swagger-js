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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.DeleteCharactersCharacterIdMailLabelsLabelIdInternalServerError = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeleteCharactersCharacterIdMailLabelsLabelIdInternalServerError model module.
   * @module model/DeleteCharactersCharacterIdMailLabelsLabelIdInternalServerError
   * @version 0.3.6.dev9
   */

  /**
   * Constructs a new <code>DeleteCharactersCharacterIdMailLabelsLabelIdInternalServerError</code>.
   * Internal server error
   * @alias module:model/DeleteCharactersCharacterIdMailLabelsLabelIdInternalServerError
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DeleteCharactersCharacterIdMailLabelsLabelIdInternalServerError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteCharactersCharacterIdMailLabelsLabelIdInternalServerError} obj Optional instance to populate.
   * @return {module:model/DeleteCharactersCharacterIdMailLabelsLabelIdInternalServerError} The populated <code>DeleteCharactersCharacterIdMailLabelsLabelIdInternalServerError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
    }
    return obj;
  }

  /**
   * Internal server error message
   * @member {String} error
   */
  exports.prototype['error'] = undefined;



  return exports;
}));


