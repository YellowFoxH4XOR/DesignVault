---
sidebar_position: 19
---

# Architecture Patterns

High-level architectural patterns for organizing and structuring complex software systems. These 20 patterns provide blueprints for system-wide design decisions.

## Pattern List

| # | Pattern | Description |
|---|---------|-------------|
| 1 | [Layered Architecture](#layered-architecture) | Organize system into horizontal layers |
| 2 | [Hexagonal Architecture](#hexagonal-architecture) | Isolate core logic from external concerns |
| 3 | [Clean Architecture](#clean-architecture) | Dependency inversion with concentric layers |
| 4 | [Onion Architecture](#onion-architecture) | Domain-centric layered architecture |
| 5 | [Domain-Driven Design](#domain-driven-design) | Model software around business domains |
| 6 | [Event-Driven Architecture](#event-driven-architecture-arch) | Structure around event production and consumption |
| 7 | [Service-Oriented Architecture](#service-oriented-architecture) | Organize as collection of services |
| 8 | [Component-Based Architecture](#component-based-architecture) | Build from reusable components |
| 9 | [Blackboard Architecture](#blackboard-architecture) | Shared knowledge base with specialists |
| 10 | [Pipe-Filter Architecture](#pipe-filter-architecture) | Chain of processing filters |
| 11 | [Space-Based Architecture](#space-based-architecture) | Distributed shared memory model |
| 12 | [Modular Monolith](#modular-monolith) | Single deployment with clear module boundaries |
| 13 | [Microkernel Architecture](#microkernel-architecture) | Core system with pluggable extensions |
| 14 | [Plugin Architecture](#plugin-architecture) | Extensible system through plugins |
| 15 | [Broker Architecture](#broker-architecture) | Intermediary coordinates component interaction |
| 16 | [Peer-to-Peer Architecture](#peer-to-peer-architecture) | Decentralized network of equal peers |
| 17 | [Client-Server Architecture](#client-server-architecture) | Clients request services from servers |
| 18 | [Three-Tier Architecture](#three-tier-architecture) | Presentation, logic, and data layers |
| 19 | [N-Tier Architecture](#n-tier-architecture) | Multiple tiers for complex systems |
| 20 | [Model-View-Controller](#model-view-controller) | Separate data, presentation, and control |

## Key Patterns

### Hexagonal Architecture (Ports and Adapters)
**Intent**: Isolate core business logic from external dependencies through well-defined interfaces.

**Benefits**:
- Testable core logic
- Technology independence
- Clear separation of concerns
- Flexible external integrations

### Domain-Driven Design (DDD)
**Intent**: Structure software development around business domains and their models.

**Key Concepts**:
- **Bounded Contexts**: Clear domain boundaries
- **Ubiquitous Language**: Shared vocabulary
- **Aggregates**: Consistency boundaries
- **Domain Services**: Business operations

### Microkernel Architecture
**Intent**: Separate core functionality from extended features through a plugin-based approach.

**Components**:
- **Core System**: Minimal essential functionality
- **Plugin Modules**: Extended features
- **Registry**: Plugin discovery and management

---

## Architecture Selection Guidelines

### Choosing Patterns
- **Monolith**: Simple applications, small teams
- **Microservices**: Complex domains, large teams
- **Layered**: Clear separation needed
- **Event-Driven**: Loose coupling, scalability
- **Hexagonal**: High testability requirements

### Trade-offs
- **Complexity vs Control**: More patterns = more complexity
- **Performance vs Flexibility**: Abstraction can impact performance
- **Team Skills vs Architecture**: Choose patterns team can execute

---

## Related Patterns
- See [Microservices Architecture](./microservices-architecture.md) for service patterns
- See [Domain-Driven Design](https://martinfowler.com/bliki/DomainDrivenDesign.html) for detailed guidance 