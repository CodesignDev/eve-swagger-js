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
    root.EveSwaggerInterface.GetCharactersCharacterIdCalendar200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdCalendar200Ok model module.
   * @module model/GetCharactersCharacterIdCalendar200Ok
   * @version 0.3.6.dev9
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdCalendar200Ok</code>.
   * event
   * @alias module:model/GetCharactersCharacterIdCalendar200Ok
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>GetCharactersCharacterIdCalendar200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdCalendar200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdCalendar200Ok} The populated <code>GetCharactersCharacterIdCalendar200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('event_date')) {
        obj['event_date'] = ApiClient.convertToType(data['event_date'], 'Date');
      }
      if (data.hasOwnProperty('event_id')) {
        obj['event_id'] = ApiClient.convertToType(data['event_id'], 'Integer');
      }
      if (data.hasOwnProperty('event_response')) {
        obj['event_response'] = ApiClient.convertToType(data['event_response'], 'String');
      }
      if (data.hasOwnProperty('importance')) {
        obj['importance'] = ApiClient.convertToType(data['importance'], 'Integer');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * event_date string
   * @member {Date} event_date
   */
  exports.prototype['event_date'] = undefined;
  /**
   * event_id integer
   * @member {Integer} event_id
   */
  exports.prototype['event_id'] = undefined;
  /**
   * event_response string
   * @member {module:model/GetCharactersCharacterIdCalendar200Ok.EventResponseEnum} event_response
   */
  exports.prototype['event_response'] = undefined;
  /**
   * importance integer
   * @member {Integer} importance
   */
  exports.prototype['importance'] = undefined;
  /**
   * title string
   * @member {String} title
   */
  exports.prototype['title'] = undefined;


  /**
   * Allowed values for the <code>event_response</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventResponseEnum = {
    /**
     * value: "declined"
     * @const
     */
    "declined": "declined",
    /**
     * value: "not_responded"
     * @const
     */
    "not_responded": "not_responded",
    /**
     * value: "accepted"
     * @const
     */
    "accepted": "accepted",
    /**
     * value: "tentative"
     * @const
     */
    "tentative": "tentative"  };


  return exports;
}));


