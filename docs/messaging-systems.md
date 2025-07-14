---
sidebar_position: 6
---

# Messaging Systems

Patterns for asynchronous communication between distributed components. These 20 patterns enable reliable, scalable message-based architectures.

## Pattern List

| # | Pattern | Description |
|---|---------|-------------|
| 1 | [Publish-Subscribe](#publish-subscribe) | Decouple message producers from consumers |
| 2 | [Point-to-Point](#point-to-point) | Direct communication between two endpoints |
| 3 | [Request-Reply](#request-reply) | Synchronous communication over async messaging |
| 4 | [Message Queue](#message-queue) | Buffer messages for asynchronous processing |
| 5 | [Fanout](#fanout) | Distribute single message to multiple recipients |
| 6 | [Content-Based Router](#content-based-router) | Route messages based on content |
| 7 | [Message Filter](#message-filter) | Filter unwanted messages |
| 8 | [Aggregator](#aggregator) | Combine related messages |
| 9 | [Scatter-Gather](#scatter-gather) | Send request to multiple services, aggregate responses |
| 10 | [Message Translator](#message-translator) | Transform message formats |
| 11 | [Dead Letter Channel](#dead-letter-channel) | Handle undeliverable messages |
| 12 | [Guaranteed Delivery](#guaranteed-delivery) | Ensure message delivery |
| 13 | [Message Sequencer](#message-sequencer) | Ensure ordered message processing |
| 14 | [Correlation Identifier](#correlation-identifier) | Track related messages |
| 15 | [Return Address](#return-address) | Include reply destination in message |
| 16 | [Event-Driven Architecture](#event-driven-architecture) | Architecture based on event production/consumption |
| 17 | [Message Broker](#message-broker) | Intermediary for message routing |
| 18 | [Message Bus](#message-bus) | Shared communication infrastructure |
| 19 | [Process Manager](#process-manager) | Coordinate multi-step business processes |
| 20 | [Routing Slip](#routing-slip) | Define message processing sequence |

## Key Patterns

### Publish-Subscribe
**Intent**: Decouple message producers (publishers) from consumers (subscribers) through an intermediary.

**Benefits**:
- Loose coupling between components
- Dynamic subscription management
- Scalable fan-out capability

**When to Use**:
- Event notifications
- Data replication
- Cache invalidation
- Multi-tenant systems

### Event-Driven Architecture
**Intent**: Structure application around events that trigger actions and state changes.

**Components**:
- **Event Producers**: Generate events
- **Event Routers**: Route events to consumers
- **Event Consumers**: Process events
- **Event Store**: Persist events

### Dead Letter Channel
**Intent**: Handle messages that cannot be delivered or processed successfully.

**Common Scenarios**:
- Message parsing failures
- Processing timeouts
- Invalid message format
- Service unavailability

**Implementation**:
```javascript
class MessageProcessor {
  async processMessage(message) {
    try {
      await this.handleMessage(message);
    } catch (error) {
      if (message.retryCount < this.maxRetries) {
        await this.scheduleRetry(message);
      } else {
        await this.sendToDeadLetterQueue(message, error);
      }
    }
  }
}
```

---

## Message Delivery Guarantees

### At-Most-Once
- Messages delivered zero or one time
- No duplicates, but messages may be lost
- Suitable for metrics, logs

### At-Least-Once
- Messages delivered one or more times
- No message loss, but duplicates possible
- Requires idempotent consumers

### Exactly-Once
- Messages delivered exactly once
- Most expensive to implement
- Use for critical business transactions

---

## Related Patterns
- See [Event Sourcing](./data-management.md#event-sourcing) for event persistence
- See [Stream Processing](./stream-processing-event.md) for real-time event handling 