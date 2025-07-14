---
sidebar_position: 4
---

# Data Management

Essential patterns for managing data consistency, storage, and flow in distributed systems. These 6 patterns address the core challenges of data handling at scale.

## Pattern List

| # | Pattern | Description |
|---|---------|-------------|
| 1 | [Sharding](#sharding) | Partition data horizontally across multiple databases |
| 2 | [Replication](#replication) | Maintain copies of data across multiple nodes |
| 3 | [Partitioning](#partitioning) | Divide data into manageable segments |
| 4 | [Event Sourcing](#event-sourcing) | Store state changes as sequence of events |
| 5 | [CQRS](#cqrs) | Separate read and write operations |
| 6 | [Saga Pattern](#saga-pattern) | Manage distributed transactions across services |

## Key Patterns

### Sharding
**Intent**: Distribute data across multiple database instances to improve performance and scalability.

**Sharding Strategies**:
- **Range-based**: Partition by data ranges (e.g., user IDs 1-1000, 1001-2000)
- **Hash-based**: Use hash function to determine shard
- **Directory-based**: Lookup service determines shard location
- **Composite**: Combine multiple strategies

**Trade-offs**:
- ✅ Improved performance and scalability
- ✅ Reduced contention
- ❌ Complex queries across shards
- ❌ Rebalancing challenges

### Event Sourcing
**Intent**: Store all changes to application state as a sequence of events rather than just current state.

**Benefits**:
- Complete audit trail
- Ability to replay events
- Temporal queries
- Natural event-driven architecture

**When to Use**:
- Need complete audit trail
- Complex domain logic
- Multiple read models needed
- Regulatory compliance requirements

**Implementation Pattern**:
```javascript
class EventStore {
  constructor() {
    this.events = [];
  }
  
  append(streamId, events, expectedVersion) {
    // Optimistic concurrency check
    const currentVersion = this.getVersion(streamId);
    if (currentVersion !== expectedVersion) {
      throw new Error('Concurrency conflict');
    }
    
    // Append events
    events.forEach(event => {
      this.events.push({
        streamId,
        eventId: generateId(),
        eventType: event.type,
        data: event.data,
        timestamp: new Date(),
        version: ++currentVersion
      });
    });
  }
  
  getEvents(streamId, fromVersion = 0) {
    return this.events.filter(e => 
      e.streamId === streamId && e.version > fromVersion
    );
  }
}
```

### CQRS (Command Query Responsibility Segregation)
**Intent**: Separate read and write operations to optimize each for their specific use case.

**Components**:
- **Command Side**: Handles writes, optimized for consistency
- **Query Side**: Handles reads, optimized for performance
- **Event Bus**: Synchronizes between command and query sides

**Benefits**:
- Independent scaling of reads/writes
- Optimized data models for each operation
- Better performance
- Simplified complex queries

### Saga Pattern
**Intent**: Manage distributed transactions across multiple services using choreography or orchestration.

**Types**:
- **Choreography**: Each service knows what to do and when
- **Orchestration**: Central coordinator manages the transaction

**Compensation Pattern**:
```javascript
class OrderSaga {
  async processOrder(order) {
    const compensations = [];
    
    try {
      // Step 1: Reserve inventory
      await this.inventoryService.reserve(order.items);
      compensations.push(() => this.inventoryService.release(order.items));
      
      // Step 2: Charge payment
      await this.paymentService.charge(order.payment);
      compensations.push(() => this.paymentService.refund(order.payment));
      
      // Step 3: Create shipment
      await this.shippingService.createShipment(order);
      
      return { success: true };
    } catch (error) {
      // Execute compensations in reverse order
      for (const compensation of compensations.reverse()) {
        await compensation();
      }
      throw error;
    }
  }
}
```

---

## Data Consistency Patterns

### Consistency Models
- **Strong Consistency**: All nodes see the same data simultaneously
- **Eventual Consistency**: System will become consistent over time
- **Weak Consistency**: No guarantees about when consistency will be achieved

### Replication Strategies
- **Master-Slave**: Single write node, multiple read replicas
- **Master-Master**: Multiple nodes can accept writes
- **Peer-to-Peer**: All nodes are equal

---

## Implementation Guidelines

### Choosing Patterns
- **Use Sharding when**: Single database can't handle the load
- **Use Event Sourcing when**: Audit trail is critical
- **Use CQRS when**: Read/write patterns are very different
- **Use Saga when**: Need distributed transactions

### Best Practices
- Design for eventual consistency by default
- Use compensation rather than rollback for distributed transactions
- Keep event schemas backward compatible
- Monitor data consistency across replicas
- Plan for shard rebalancing from the start

### Common Pitfalls
- Over-sharding leading to hotspots
- Not handling partial failures in sagas
- Event schema evolution without versioning
- Ignoring CAP theorem implications

---

## Related Patterns
- See [Distributed Systems Core](./distributed-systems-core.md) for consistency fundamentals
- See [Advanced Distributed Systems](./advanced-distributed-systems.md) for consensus patterns
- See [Database Design](./database-design.md) for schema patterns 