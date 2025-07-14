---
sidebar_position: 18
---

# Reliability & Resilience Patterns

Advanced patterns for building highly reliable systems that gracefully handle failures and maintain service quality. These 20 patterns build upon core resilience concepts.

## Pattern List

| # | Pattern | Description |
|---|---------|-------------|
| 1 | [Adaptive Response](#adaptive-response) | Dynamically adjust behavior based on conditions |
| 2 | [Superior Monitoring](#superior-monitoring) | Advanced observability and alerting |
| 3 | [Coordinated Resilience](#coordinated-resilience) | System-wide resilience coordination |
| 4 | [Heterogeneous Systems](#heterogeneous-systems) | Diverse technologies for fault tolerance |
| 5 | [Dynamic Repositioning](#dynamic-repositioning) | Relocate services based on conditions |
| 6 | [Requisite Availability](#requisite-availability) | Match availability to requirements |
| 7 | [Graceful Degradation](#graceful-degradation) | Reduce functionality rather than fail completely |
| 8 | [Fail-Fast](#fail-fast) | Detect and report failures immediately |
| 9 | [Fail-Safe](#fail-safe) | Default to safe state on failure |
| 10 | [Isolation](#isolation) | Prevent failure propagation |
| 11 | [Redundancy](#redundancy) | Multiple instances for fault tolerance |
| 12 | [Backup and Recovery](#backup-and-recovery) | Data protection and restoration |
| 13 | [Disaster Recovery](#disaster-recovery) | Recover from catastrophic failures |
| 14 | [High Availability](#high-availability) | Minimize downtime through design |
| 15 | [Load Shedding](#load-shedding) | Drop non-essential load during stress |
| 16 | [Backpressure](#backpressure) | Control flow to prevent overload |
| 17 | [Jitter](#jitter) | Add randomness to prevent thundering herd |
| 18 | [Exponential Backoff](#exponential-backoff) | Progressively increase retry intervals |
| 19 | [Dead Letter Queue](#dead-letter-queue-reliability) | Handle permanently failed messages |
| 20 | [Poison Message Handling](#poison-message-handling) | Deal with messages that cause failures |

## Key Patterns

### Graceful Degradation
**Intent**: Maintain core functionality while reducing features during stress or failures.

**Strategies**:
- Disable non-essential features
- Reduce data quality/freshness
- Switch to cached responses
- Simplify user interface

### Load Shedding
**Intent**: Intentionally drop less important requests to maintain service for critical operations.

**Approaches**:
- Priority-based shedding
- Random sampling
- User-tier based
- Resource-based limits

---

## Related Patterns
- See [Resilience & Fault Tolerance](./resilience-fault-tolerance.md) for foundational patterns
- See [Observability & Monitoring](./observability-monitoring.md) for monitoring patterns 