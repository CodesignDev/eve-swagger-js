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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EveSwaggerInterface.UserInterfaceApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserInterfaceApi', function() {
    describe('postUiAutopilotWaypoint', function() {
      it('should call postUiAutopilotWaypoint successfully', function(done) {
        //uncomment below and update the code to test postUiAutopilotWaypoint
        //instance.postUiAutopilotWaypoint(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postUiOpenwindowContract', function() {
      it('should call postUiOpenwindowContract successfully', function(done) {
        //uncomment below and update the code to test postUiOpenwindowContract
        //instance.postUiOpenwindowContract(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postUiOpenwindowInformation', function() {
      it('should call postUiOpenwindowInformation successfully', function(done) {
        //uncomment below and update the code to test postUiOpenwindowInformation
        //instance.postUiOpenwindowInformation(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postUiOpenwindowMarketdetails', function() {
      it('should call postUiOpenwindowMarketdetails successfully', function(done) {
        //uncomment below and update the code to test postUiOpenwindowMarketdetails
        //instance.postUiOpenwindowMarketdetails(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postUiOpenwindowNewmail', function() {
      it('should call postUiOpenwindowNewmail successfully', function(done) {
        //uncomment below and update the code to test postUiOpenwindowNewmail
        //instance.postUiOpenwindowNewmail(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
