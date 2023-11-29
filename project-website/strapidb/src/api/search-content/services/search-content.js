'use strict';

/**
 * search-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::search-content.search-content');
