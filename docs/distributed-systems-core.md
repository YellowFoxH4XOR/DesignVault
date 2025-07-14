---
sidebar_position: 2
---

# Distributed Systems Core

The fundamental patterns that form the backbone of distributed systems. These 20 patterns are essential building blocks for creating reliable, scalable, and consistent distributed applications.

## Pattern List

| # | Pattern | Description |
|---|---------|-------------|
| 1 | [Bloom Filters](#bloom-filters) | Probabilistic data structure for membership testing |
| 2 | [Consistent Hashing](#consistent-hashing) | Distribute data across nodes with minimal reshuffling |
| 3 | [Quorum](#quorum) | Achieve consensus with majority voting |
| 4 | [Leader and Follower](#leader-and-follower) | Establish clear leadership for coordination |
| 5 | [Write-ahead Log](#write-ahead-log) | Ensure durability through logging |
| 6 | [Segmented Log](#segmented-log) | Manage large logs through segmentation |
| 7 | [High-Water Mark](#high-water-mark) | Track committed data boundaries |
| 8 | [Lease](#lease) | Provide time-bounded resource ownership |
| 9 | [Heartbeat](#heartbeat) | Monitor node health and availability |
| 10 | [Gossip Protocol](#gossip-protocol) | Spread information through epidemic communication |
| 11 | [Phi Accrual Failure Detection](#phi-accrual-failure-detection) | Adaptive failure detection mechanism |
| 12 | [Split-brain](#split-brain) | Handle network partition scenarios |
| 13 | [Fencing](#fencing) | Prevent multiple writers from corrupting data |
| 14 | [Checksum](#checksum) | Verify data integrity |
| 15 | [Vector Clocks](#vector-clocks) | Track causality in distributed events |
| 16 | [CAP Theorem](#cap-theorem) | Understand fundamental trade-offs |
| 17 | [PACELC Theorem](#pacelc-theorem) | Extended consistency vs availability trade-offs |
| 18 | [Hinted Handoff](#hinted-handoff) | Handle temporary node failures |
| 19 | [Read Repair](#read-repair) | Fix inconsistencies during read operations |
| 20 | [Merkle Trees](#merkle-trees) | Efficiently verify large data structures |

## Key Patterns

### Bloom Filters
**Intent**: Provide space-efficient probabilistic data structure for set membership testing.

**When to Use**: 
- Need to quickly check if an element might exist in a large dataset
- Can tolerate false positives but not false negatives
- Memory is limited compared to the dataset size

**Trade-offs**:
- ✅ Very space efficient
- ✅ Constant time complexity O(1)
- ❌ False positives possible
- ❌ Cannot delete elements (without counting variants)

### Consistent Hashing
**Intent**: Distribute data across nodes while minimizing redistribution when nodes are added or removed.

**When to Use**:
- Building distributed hash tables
- Load balancing across dynamic server pools
- Distributed caching systems

**Trade-offs**:
- ✅ Minimal data movement on node changes
- ✅ Good load distribution with virtual nodes
- ❌ Complex implementation
- ❌ Potential hotspots without virtual nodes

### Quorum
**Intent**: Achieve consistency by requiring majority agreement for operations.

**When to Use**:
- Need strong consistency guarantees
- Can tolerate some node failures
- Want to avoid split-brain scenarios

**Trade-offs**:
- ✅ Strong consistency guarantees
- ✅ Fault tolerant (can survive N/2 failures)
- ❌ Reduced availability during partitions
- ❌ Higher latency due to coordination

### CAP Theorem
**Intent**: Understand the fundamental trade-offs between Consistency, Availability, and Partition tolerance.

**Key Insight**: In the presence of network partitions, a distributed system must choose between consistency and availability.

**Practical Implications**:
- **CP Systems**: Choose consistency over availability (e.g., traditional RDBMS)
- **AP Systems**: Choose availability over consistency (e.g., DNS, web caches)
- **CA Systems**: Only possible when no partitions occur (single-node systems)

---

## Implementation Guidelines

### Getting Started
1. **Start with Heartbeat and Failure Detection** - Essential for any distributed system
2. **Add Write-ahead Log** - Ensure data durability early
3. **Implement Consistent Hashing** - For data distribution
4. **Use Quorum for Critical Operations** - When consistency matters

### Common Combinations
- **Heartbeat + Phi Accrual Failure Detection**: Robust health monitoring
- **Write-ahead Log + Segmented Log**: Scalable persistence
- **Consistent Hashing + Hinted Handoff**: Resilient data distribution
- **Quorum + Vector Clocks**: Strong consistency with causality tracking

### Best Practices
- Always consider the CAP theorem implications for your use case
- Use Bloom filters for cache optimization and reducing expensive lookups
- Implement proper fencing to prevent data corruption
- Design with network partitions in mind

---

## Related Patterns
- See [Resilience & Fault Tolerance](./resilience-fault-tolerance.md) for failure handling patterns
- See [Data Management](./data-management.md) for data consistency patterns
- See [Advanced Distributed Systems](./advanced-distributed-systems.md) for consensus algorithms 