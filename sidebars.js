/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  patternsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Core Patterns',
      items: [
        'distributed-systems-core',
        'resilience-fault-tolerance',
        'data-management',
        'microservices-architecture',
        'messaging-systems',
        'caching-strategies',
        'security-authorization',
        'performance-scalability',
      ],
    },
    {
      type: 'category',
      label: 'Extended Patterns',
      items: [
        'advanced-distributed-systems',
        'stream-processing-event',
        'data-pipeline',
        'cloud-serverless',
        'container-orchestration',
        'observability-monitoring',
        'database-design',
        'concurrency-coordination',
        'reliability-resilience',
        'architecture-patterns',
      ],
    },
    {
      type: 'category',
      label: 'Specialized Domains',
      items: [
        'machine-learning-ai',
        'iot-edge',
        'blockchain-distributed-ledger',
        'emerging-technology',
      ],
    },
    'contributing',
    'deployment',
  ],
};

module.exports = sidebars; 