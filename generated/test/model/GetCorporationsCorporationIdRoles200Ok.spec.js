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
    instance = new EveSwaggerInterface.GetCorporationsCorporationIdRoles200Ok();
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

  describe('GetCorporationsCorporationIdRoles200Ok', function() {
    it('should create an instance of GetCorporationsCorporationIdRoles200Ok', function() {
      // uncomment below and update the code to test GetCorporationsCorporationIdRoles200Ok
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdRoles200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdRoles200Ok);
    });

    it('should have the property characterId (base name: "character_id")', function() {
      // uncomment below and update the code to test the property characterId
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdRoles200Ok();
      //expect(instance).to.be();
    });

    it('should have the property grantableRoles (base name: "grantable_roles")', function() {
      // uncomment below and update the code to test the property grantableRoles
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdRoles200Ok();
      //expect(instance).to.be();
    });

    it('should have the property grantableRolesAtBase (base name: "grantable_roles_at_base")', function() {
      // uncomment below and update the code to test the property grantableRolesAtBase
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdRoles200Ok();
      //expect(instance).to.be();
    });

    it('should have the property grantableRolesAtHq (base name: "grantable_roles_at_hq")', function() {
      // uncomment below and update the code to test the property grantableRolesAtHq
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdRoles200Ok();
      //expect(instance).to.be();
    });

    it('should have the property grantableRolesAtOther (base name: "grantable_roles_at_other")', function() {
      // uncomment below and update the code to test the property grantableRolesAtOther
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdRoles200Ok();
      //expect(instance).to.be();
    });

    it('should have the property roles (base name: "roles")', function() {
      // uncomment below and update the code to test the property roles
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdRoles200Ok();
      //expect(instance).to.be();
    });

    it('should have the property rolesAtBase (base name: "roles_at_base")', function() {
      // uncomment below and update the code to test the property rolesAtBase
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdRoles200Ok();
      //expect(instance).to.be();
    });

    it('should have the property rolesAtHq (base name: "roles_at_hq")', function() {
      // uncomment below and update the code to test the property rolesAtHq
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdRoles200Ok();
      //expect(instance).to.be();
    });

    it('should have the property rolesAtOther (base name: "roles_at_other")', function() {
      // uncomment below and update the code to test the property rolesAtOther
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdRoles200Ok();
      //expect(instance).to.be();
    });

  });

}));
