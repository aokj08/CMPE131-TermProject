'use strict';

/**
 * email-subcribe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-subcribe.email-subcribe');
