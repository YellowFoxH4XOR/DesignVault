---
sidebar_position: 16
---

# Database Design Patterns

Patterns for designing scalable, maintainable database schemas and architectures. These 20 patterns address schema evolution, data modeling, and database scaling challenges.

## Pattern List

| # | Pattern | Description |
|---|---------|-------------|
| 1 | [Single Table Inheritance](#single-table-inheritance) | Store hierarchical data in one table |
| 2 | [Class Table Inheritance](#class-table-inheritance) | Separate tables for each class in hierarchy |
| 3 | [Entity-Attribute-Value](#entity-attribute-value) | Flexible schema for varying attributes |
| 4 | [Composite Key](#composite-key) | Multiple columns forming primary key |
| 5 | [Multipart Index](#multipart-index) | Index spanning multiple columns |
| 6 | [Materialized View](#materialized-view) | Precomputed query results |
| 7 | [Many-to-Many Relationship](#many-to-many-relationship) | Associate entities through junction table |
| 8 | [Database per Service](#database-per-service) | Each microservice owns its data |
| 9 | [Shared Database](#shared-database) | Multiple services sharing database |
| 10 | [Database Sharding](#database-sharding) | Horizontal partitioning across databases |
| 11 | [Database Replication](#database-replication) | Copy data across multiple database instances |
| 12 | [Database Partitioning](#database-partitioning) | Divide tables into smaller pieces |
| 13 | [Database Federation](#database-federation) | Virtual unified view of distributed databases |
| 14 | [Database Pooling](#database-pooling) | Manage database connections efficiently |
| 15 | [Connection Pooling](#connection-pooling) | Reuse database connections |
| 16 | [Read Replicas](#read-replicas) | Separate instances for read operations |
| 17 | [Write Replicas](#write-replicas) | Multiple write-enabled database instances |
| 18 | [Database Caching](#database-caching) | Cache frequently accessed data |
| 19 | [Database Migration](#database-migration) | Evolve schema over time |
| 20 | [Schema Evolution](#schema-evolution) | Handle schema changes gracefully |

## Key Patterns

### Database per Service
**Intent**: Each microservice owns and controls its data independently.

**Benefits**:
- Service autonomy
- Technology diversity
- Independent scaling
- Fault isolation

**Challenges**:
- Data consistency across services
- Cross-service queries
- Transaction management

### Schema Evolution
**Intent**: Change database schema while maintaining backward compatibility.

**Strategies**:
- **Additive Changes**: Add new columns/tables
- **Backwards Compatible**: Support old and new formats
- **Migration Scripts**: Automated schema updates
- **Versioning**: Track schema versions

---

## Related Patterns
- See [Data Management](./data-management.md) for data consistency patterns
- See [Performance & Scalability](./performance-scalability.md) for database scaling 