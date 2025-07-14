---
sidebar_position: 12
---

# Data Pipeline Patterns

Patterns for building robust, scalable data processing pipelines. These 20 patterns address batch processing, streaming, and hybrid data architectures.

## Pattern List

| # | Pattern | Description |
|---|---------|-------------|
| 1 | [Lambda Architecture](#lambda-architecture) | Batch + stream processing for comprehensive data handling |
| 2 | [Kappa Architecture](#kappa-architecture) | Stream-only architecture for simplified data processing |
| 3 | [Data Lake](#data-lake) | Store raw data in its native format |
| 4 | [Data Warehouse](#data-warehouse) | Structured data storage for analytics |
| 5 | [ETL Pipeline](#etl-pipeline) | Extract, Transform, Load data processing |
| 6 | [ELT Pipeline](#elt-pipeline) | Extract, Load, Transform with cloud-scale compute |
| 7 | [Fan-Out/Fan-In](#fan-out-fan-in) | Parallel processing with result aggregation |
| 8 | [Data Mesh](#data-mesh) | Decentralized data architecture |
| 9 | [Data Lakehouse](#data-lakehouse) | Combine data lake and warehouse benefits |
| 10 | [Change Data Capture](#change-data-capture-pipeline) | Stream database changes to pipelines |
| 11 | [Data Partitioning](#data-partitioning) | Organize data for efficient processing |
| 12 | [Data Caching](#data-caching) | Cache frequently accessed data |
| 13 | [Parallel Processing](#parallel-processing) | Process data concurrently for speed |
| 14 | [Batch Processing](#batch-processing-pipeline) | Process large datasets in scheduled batches |
| 15 | [Stream Processing](#stream-processing-pipeline) | Process data in real-time as it arrives |
| 16 | [Micro-Batch Processing](#micro-batch-processing) | Small batch processing for near real-time |
| 17 | [Time-Based Partitioning](#time-based-partitioning) | Partition data by time windows |
| 18 | [Full Snapshot](#full-snapshot) | Complete data extraction and replacement |
| 19 | [Idempotent Pipeline](#idempotent-pipeline) | Safe to re-run without side effects |
| 20 | [Multi-hop Pipeline](#multi-hop-pipeline) | Chain multiple processing stages |

## Key Patterns

### Lambda Architecture
**Intent**: Handle both batch and real-time processing with separate pipelines that converge in a serving layer.

**Layers**:
- **Batch Layer**: Process complete datasets for historical accuracy
- **Speed Layer**: Process real-time streams for immediate insights  
- **Serving Layer**: Merge batch and stream results for queries

**Benefits**:
- Fault tolerance through redundancy
- Handles both historical and real-time data
- Proven at scale

**Trade-offs**:
- Complex to maintain two processing systems
- Data consistency challenges between layers

### Data Mesh
**Intent**: Treat data as a product with domain-oriented, decentralized data ownership.

**Principles**:
- **Domain Ownership**: Teams own their data products
- **Data as a Product**: Apply product thinking to data
- **Self-Serve Platform**: Enable teams to build data products
- **Federated Governance**: Consistent standards across domains

### ETL vs ELT
**ETL (Extract, Transform, Load)**:
- Transform data before loading
- Better for complex transformations
- Traditional approach

**ELT (Extract, Load, Transform)**:
- Load raw data first, transform later
- Leverages cloud compute power
- More flexible for exploratory analysis

---

## Implementation Guidelines

### Choosing Architecture Patterns
- **Use Lambda**: When you need both batch and stream processing
- **Use Kappa**: When stream-only processing meets requirements  
- **Use Data Mesh**: For large organizations with domain expertise
- **Use Data Lake**: For storing diverse, raw data formats

### Best Practices
- **Schema Evolution**: Plan for changing data structures
- **Data Quality**: Implement validation and monitoring
- **Lineage Tracking**: Know where data comes from and goes
- **Error Handling**: Graceful failure and retry mechanisms

---

## Related Patterns
- See [Stream Processing](./stream-processing-event.md) for real-time patterns
- See [Data Management](./data-management.md) for data consistency patterns 