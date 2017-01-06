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
    root.EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashOkVictimItems = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetKillmailsKillmailIdKillmailHashOkVictimItems model module.
   * @module model/GetKillmailsKillmailIdKillmailHashOkVictimItems
   * @version 0.3.6.dev9
   */

  /**
   * Constructs a new <code>GetKillmailsKillmailIdKillmailHashOkVictimItems</code>.
   * item object
   * @alias module:model/GetKillmailsKillmailIdKillmailHashOkVictimItems
   * @class
   * @param flag {Integer} flag integer
   * @param itemTypeId {Integer} item_type_id integer
   * @param singleton {Integer} singleton integer
   */
  var exports = function(flag, itemTypeId, singleton) {
    var _this = this;

    _this['flag'] = flag;
    _this['item_type_id'] = itemTypeId;


    _this['singleton'] = singleton;
  };

  /**
   * Constructs a <code>GetKillmailsKillmailIdKillmailHashOkVictimItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetKillmailsKillmailIdKillmailHashOkVictimItems} obj Optional instance to populate.
   * @return {module:model/GetKillmailsKillmailIdKillmailHashOkVictimItems} The populated <code>GetKillmailsKillmailIdKillmailHashOkVictimItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('flag')) {
        obj['flag'] = ApiClient.convertToType(data['flag'], 'Integer');
      }
      if (data.hasOwnProperty('item_type_id')) {
        obj['item_type_id'] = ApiClient.convertToType(data['item_type_id'], 'Integer');
      }
      if (data.hasOwnProperty('quantity_destroyed')) {
        obj['quantity_destroyed'] = ApiClient.convertToType(data['quantity_destroyed'], 'Integer');
      }
      if (data.hasOwnProperty('quantity_dropped')) {
        obj['quantity_dropped'] = ApiClient.convertToType(data['quantity_dropped'], 'Integer');
      }
      if (data.hasOwnProperty('singleton')) {
        obj['singleton'] = ApiClient.convertToType(data['singleton'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * flag integer
   * @member {Integer} flag
   */
  exports.prototype['flag'] = undefined;
  /**
   * item_type_id integer
   * @member {Integer} item_type_id
   */
  exports.prototype['item_type_id'] = undefined;
  /**
   * quantity_destroyed integer
   * @member {Integer} quantity_destroyed
   */
  exports.prototype['quantity_destroyed'] = undefined;
  /**
   * quantity_dropped integer
   * @member {Integer} quantity_dropped
   */
  exports.prototype['quantity_dropped'] = undefined;
  /**
   * singleton integer
   * @member {Integer} singleton
   */
  exports.prototype['singleton'] = undefined;



  return exports;
}));


