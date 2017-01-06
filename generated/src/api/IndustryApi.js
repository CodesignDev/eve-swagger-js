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
    define(['ApiClient', 'model/GetIndustryFacilities200Ok', 'model/GetIndustryFacilitiesInternalServerError', 'model/GetIndustrySystems200Ok', 'model/GetIndustrySystemsInternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetIndustryFacilities200Ok'), require('../model/GetIndustryFacilitiesInternalServerError'), require('../model/GetIndustrySystems200Ok'), require('../model/GetIndustrySystemsInternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.IndustryApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetIndustryFacilities200Ok, root.EveSwaggerInterface.GetIndustryFacilitiesInternalServerError, root.EveSwaggerInterface.GetIndustrySystems200Ok, root.EveSwaggerInterface.GetIndustrySystemsInternalServerError);
  }
}(this, function(ApiClient, GetIndustryFacilities200Ok, GetIndustryFacilitiesInternalServerError, GetIndustrySystems200Ok, GetIndustrySystemsInternalServerError) {
  'use strict';

  /**
   * Industry service.
   * @module api/IndustryApi
   * @version 0.3.6.dev9
   */

  /**
   * Constructs a new IndustryApi. 
   * @alias module:api/IndustryApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getIndustryFacilities operation.
     * @callback module:api/IndustryApi~getIndustryFacilitiesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetIndustryFacilities200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List industry facilities
     * Return a list of industry facilities  ---  Alternate route: &#x60;/v1/industry/facilities/&#x60;  Alternate route: &#x60;/legacy/industry/facilities/&#x60;  Alternate route: &#x60;/dev/industry/facilities/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/IndustryApi~getIndustryFacilitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetIndustryFacilities200Ok>}
     */
    this.getIndustryFacilities = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetIndustryFacilities200Ok];

      return this.apiClient.callApi(
        '/industry/facilities/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIndustrySystems operation.
     * @callback module:api/IndustryApi~getIndustrySystemsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetIndustrySystems200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List solar system cost indices
     * Return cost indices for solar systems  ---  Alternate route: &#x60;/v1/industry/systems/&#x60;  Alternate route: &#x60;/legacy/industry/systems/&#x60;  Alternate route: &#x60;/dev/industry/systems/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/IndustryApi~getIndustrySystemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetIndustrySystems200Ok>}
     */
    this.getIndustrySystems = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetIndustrySystems200Ok];

      return this.apiClient.callApi(
        '/industry/systems/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
