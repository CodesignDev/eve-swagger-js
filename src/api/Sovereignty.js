/**
 * An api adapter that provides functions for accessing the
 * [sovereignty](https://esi.tech.ccp.is/latest/#/Sovereignty) ESI end points.
 * You should not usually instantiate this directly as its constructor requires
 * an internal api instance.
 */
class Sovereignty {
  /**
   * Create a new Sovereignty instance using the given `agent`.
   *
   * @param agent {ESIAgent} The ESI Agent
   * @constructor
   */
  constructor(agent) {
    this._agent = agent;
  }

  /**
   * @esi_route get_sovereignty_campaigns
   *
   * @return {Promise.<Array.<Object>>}
   */
  campaigns() {
    return this._agent.noAuth.get('/v1/sovereignty/campaigns/');
  }

  /**
   * @esi_route get_sovereignty_structures
   *
   * @return {Promise.<Array.<Object>>}
   */
  structures() {
    return this._agent.noAuth.get('/v1/sovereignty/structures/');
  }
}


module.exports = Sovereignty;
