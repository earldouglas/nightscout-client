(function() {
  'use strict';

  /**
   * Add new treatments.
   *
   * @param  {String} nightscoutHost e.g. nightscout.example.com
   * @param  {String} nightscoutApiSecret the SHA-1 hash of an access token with the `api:treatments:create` permission
   * @param  {String} treatments an array of treatments to add
   * @return {Boolean} whether or not it worked
   */
  const addTreatments = (nightscoutHost, nightscoutApiSecret, treatments) =>
    fetch(`https://${nightscoutHost}/api/v1/treatments`, {
      method: 'POST',
      headers: {
        'api-secret': nightscoutApiSecret,
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(treatments),
    }).then((response) =>
      response.status === 200
    );

  const exports = {
    addTreatments: addTreatments,
  };

  if (typeof module !== 'undefined') {
    module.exports = exports;
  } else {
    window.nightscoutClient = exports;
  }

})();
