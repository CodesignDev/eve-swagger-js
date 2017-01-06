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
    instance = new EveSwaggerInterface.GetIncursions200Ok();
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

  describe('GetIncursions200Ok', function() {
    it('should create an instance of GetIncursions200Ok', function() {
      // uncomment below and update the code to test GetIncursions200Ok
      //var instane = new EveSwaggerInterface.GetIncursions200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetIncursions200Ok);
    });

    it('should have the property constellationId (base name: "constellation_id")', function() {
      // uncomment below and update the code to test the property constellationId
      //var instane = new EveSwaggerInterface.GetIncursions200Ok();
      //expect(instance).to.be();
    });

    it('should have the property factionId (base name: "faction_id")', function() {
      // uncomment below and update the code to test the property factionId
      //var instane = new EveSwaggerInterface.GetIncursions200Ok();
      //expect(instance).to.be();
    });

    it('should have the property hasBoss (base name: "has_boss")', function() {
      // uncomment below and update the code to test the property hasBoss
      //var instane = new EveSwaggerInterface.GetIncursions200Ok();
      //expect(instance).to.be();
    });

    it('should have the property infestedSolarSystems (base name: "infested_solar_systems")', function() {
      // uncomment below and update the code to test the property infestedSolarSystems
      //var instane = new EveSwaggerInterface.GetIncursions200Ok();
      //expect(instance).to.be();
    });

    it('should have the property influence (base name: "influence")', function() {
      // uncomment below and update the code to test the property influence
      //var instane = new EveSwaggerInterface.GetIncursions200Ok();
      //expect(instance).to.be();
    });

    it('should have the property stagingSolarSystemId (base name: "staging_solar_system_id")', function() {
      // uncomment below and update the code to test the property stagingSolarSystemId
      //var instane = new EveSwaggerInterface.GetIncursions200Ok();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new EveSwaggerInterface.GetIncursions200Ok();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new EveSwaggerInterface.GetIncursions200Ok();
      //expect(instance).to.be();
    });

  });

}));
